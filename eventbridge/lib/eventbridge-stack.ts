import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as events from 'aws-cdk-lib/aws-events';

export class EventbridgeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'EventbridgeQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const eventBus = new events.EventBus(this, 'EventBus', {

    })

    eventBus.
  }
}
