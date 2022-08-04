import {Entity} from "electrodb";
import CommentSchema from "./models/comments"
import * as Dynamo from "./dynamo"

export const commentEntity = new Entity(CommentSchema, Dynamo.Configuration)
