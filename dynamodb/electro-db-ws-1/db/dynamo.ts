export * as Dynamo from "./dynamo";

import * as output from "./cdk-output.json"
import {EntityConfiguration} from "electrodb";
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

export const Client = new DynamoDBClient({
    // region: "us-east-1",
});

export const Configuration: EntityConfiguration = {
    table: output.ElectroDbWs1Stack.TableName,
    client: Client,
}
