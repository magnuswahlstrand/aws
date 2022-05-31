# Welcome to your CDK Go project!



```
> cdk deploy
panic: "Expected object reference, got 5000000000"

goroutine 1 [running]:
github.com/aws/jsii-runtime-go/runtime.Create({0x102d81500, 0x22}, {0x14000337e48, 0x3, 0x3}, {0x103066d80, 0x140003f2a80})
	/Users/magnus/go/pkg/mod/github.com/aws/jsii-runtime-go@v1.58.0/runtime/runtime.go:186 +0x750
github.com/aws/aws-cdk-go/awscdk/v2/awsstepfunctions.NewWait({0x10dc8d6c8?, 0x14000118588}, 0x140003cea80, 0x14000118690)
	/Users/magnus/go/pkg/mod/github.com/aws/aws-cdk-go/awscdk/v2@v2.24.1/awsstepfunctions/awsstepfunctions.go:11803 +0xd0
main.NewHelloWorldStack({0x10dc8d6a0, 0x140003ce6c0}, {0x102d78c21, 0xf}, 0x14000337f28)
	/Users/magnus/repo/magnuswahlstrand/aws/stepfunctions/hello-world/hello-world.go:26 +0x1a8
main.main()
	/Users/magnus/repo/magnuswahlstrand/aws/stepfunctions/hello-world/hello-world.go:36 +0x70
exit status 2
```

```
type WaitProps struct {
	// Wait duration.
	Time WaitTime `field:"required" json:"time" yaml:"time"`
	// An optional description for this state.
	Comment *string `field:"optional" json:"comment" yaml:"comment"`
}
```



```
wait := sfn.NewWait(stack, s("wait2"), &sfn.WaitProps{
    Time: 5 * time.Second,
})
```

Turns out that Time in WaitProps is defined as follow, namely the empty interface.
```
type WaitTime interface {
}
```
