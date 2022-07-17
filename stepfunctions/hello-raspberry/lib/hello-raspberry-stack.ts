import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as iot from 'aws-cdk-lib/aws-iot';
import * as fs from "fs";
import * as path from "path";

export class HelloRaspberryStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const thing = new iot.CfnThing(this, "MyThing", {
            thingName: "MagnusCDK"
        })


        const cert = new iot.CfnCertificate(this, 'MyThingCert', {
            status: "ACTIVE",
            certificateSigningRequest: fs.readFileSync(
                path.resolve("cert/cert.csr"),
                "utf-8"
            )
        })

        const iotPolicy = new iot.CfnPolicy(this, 'MyThingPolicy', {
            policyName: 'MyThingPolicy',
            policyDocument: {
                Version: '2012-10-17',
                Statement: [
                    {
                        Effect: 'Allow',
                        Action: ['iot:*'],
                        Resource: ['*'],
                    },
                ],
            },
        });

    }
}
