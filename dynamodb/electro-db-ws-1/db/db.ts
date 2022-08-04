import {Entity} from "electrodb"
import {schema} from "./comments"
import * as cdk from "./cdk-output.json"

import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({})

export const comments = new Entity(schema, {
    table: cdk.ElectroDbWs1Stack.ElectroDbTableName,
    client: client,
})
