package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
	events "github.com/aws/aws-cdk-go/awscdk/v2/awsevents"
	targets "github.com/aws/aws-cdk-go/awscdk/v2/awseventstargets"
	"github.com/aws/aws-cdk-go/awscdk/v2/awslambda"
	sfn "github.com/aws/aws-cdk-go/awscdk/v2/awsstepfunctions"
	tasks "github.com/aws/aws-cdk-go/awscdk/v2/awsstepfunctionstasks"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"time"
)

type HelloWorldStackProps struct {
	awscdk.StackProps
}

func s(v string) *string {
	return &v
}

func NewHelloWorldStack(scope constructs.Construct, id string, props *HelloWorldStackProps) awscdk.Stack {
	var sprops awscdk.StackProps
	if props != nil {
		sprops = props.StackProps
	}
	stack := awscdk.NewStack(scope, &id, &sprops)

	wait := sfn.NewWait(stack, s("wait2"), &sfn.WaitProps{
		Time: sfn.WaitTime_Duration(awscdk.Duration_Seconds(jsii.Number(5.0))),
	})

	wait := sfn.NewWait(stack, s("wait2"), &sfn.WaitProps{
		Time: 5 * time.Second,
	})

	jobSucceeded := sfn.NewSucceed(stack, s("suceed job"), &sfn.SucceedProps{
		Comment: s("no comment"),
	})

	lambdaFn := awslambda.NewFunction(stack, jsii.String("Singleton"), &awslambda.FunctionProps{
		Code: awslambda.NewInlineCode(s(`
    exports.handler = async (event) => {
		console.log('event: ', event)
		if(Math.random() > 0.8)
			throw new Error('unlucky')
		return event
    };
  `)),
		Handler: jsii.String("index.handler"),
		Timeout: awscdk.Duration_Seconds(jsii.Number(20)),
		Runtime: awslambda.Runtime_NODEJS_16_X(),
	})

	fn := tasks.NewLambdaInvoke(stack, s("MyLambda"), &tasks.LambdaInvokeProps{
		OutputPath:     s("$.Payload"),
		LambdaFunction: lambdaFn,
	})

	// State machine
	definition := fn.
		Next(wait).
		Next(jobSucceeded)
	machine := sfn.NewStateMachine(stack, s("CronStateMachine"), &sfn.StateMachineProps{
		Definition: definition,
		Timeout:    awscdk.Duration_Minutes(jsii.Number(1.0)),
	})

	// Triggers
	rule := events.NewRule(stack, jsii.String("Rule"), &events.RuleProps{
		Schedule: events.Schedule_Rate(awscdk.Duration_Minutes(jsii.Number(30.0))),
	})
	rule.AddTarget(targets.NewSfnStateMachine(machine, nil))

	return stack
}

func main() {
	app := awscdk.NewApp(nil)

	NewHelloWorldStack(app, "HelloWorldStack", &HelloWorldStackProps{
		awscdk.StackProps{
			Env: env(),
		},
	})

	app.Synth(nil)
}

func env() *awscdk.Environment {
	return nil
}
