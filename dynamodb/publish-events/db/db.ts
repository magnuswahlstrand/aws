import {Entity} from "electrodb";
import EventSchema from "./events";
import CommentSchema from "./comments";
import {DynamoDBClient} from "@aws-sdk/client-dynamodb"; // ES6 import
import {DynamoDBDocumentClient, TransactWriteCommand} from "@aws-sdk/lib-dynamodb"; // ES6 import
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client); // client is DynamoDB client


const config = {client: ddbDocClient, table: "magnus-electro-db-table"}

const events = new Entity(EventSchema, config);
const comments = new Entity(CommentSchema, config)

const withEvent = async () => {
    const entityID = "abc123"
    await ddbDocClient.send(new TransactWriteCommand({
        TransactItems: [
            comments.create({commentID: entityID, text: "hello!"}),
            events.create({type: `${comments.schema.model.entity}Created`, entityID: entityID}),
        ],
    }));
}
