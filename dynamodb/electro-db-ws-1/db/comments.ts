import {v4 as uuid} from "uuid";

export const schema = {
    model: {
        entity: "comments",
        version: "1",
        service: "comments",
    },
    attributes: {
        commentID: {
            type: "string",
            required: true,
            readOnly: true,
            default: () => uuid()
        },
        comment: {
            type: "string",
            required: true,
        },
        createdAt: {
            type: "string",
            readOnly: true,
            set: () => new Date().toISOString()
        },
        updatedAt: {
            type: "string",
            readOnly: true,
            watch: "*",
            set: () => new Date().toISOString()
        }
    },
    indexes: {
        comments: {
            pk: {
                field: "pk",
                composite: ["commentID"],
            },
            sk: {
                field: "sk",
                composite: [],
            }
        }
    }
} as const
