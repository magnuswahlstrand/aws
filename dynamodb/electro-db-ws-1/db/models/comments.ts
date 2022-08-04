import {v4 as uuid} from "uuid";

const schema = {
    model: {
        entity: "comments",
        version: "1",
        service: "commentservice"
    },
    attributes: {
        commentID: {
            type: "string",
            default: () => uuid(),
            readOnly: true,
            required: true,
        },
        text: {
            type: "string",
            required: true,
        },
        createdAt: {
            type: "string",
            required: true,
        }
    },
    indexes: {
        comment: {
            pk: {
                field: "pk",
                composite: ["commentID"],
            },
            sk: {
                field: "sk",
                composite: ["createdAt"],
            }
        }
    }
} as const;

export default schema;
