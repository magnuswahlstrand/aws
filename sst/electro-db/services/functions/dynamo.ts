export * as Dynamo from "./dynamo";

import {EntityConfiguration} from "electrodb";
import {DynamoDBClient} from "@aws-sdk/client-dynamodb";

export const Client = new DynamoDBClient({
    region: "us-east-1",
});

export const Configuration: EntityConfiguration = {
    table: "magnus-electro-db-table",
    client: Client,
};
