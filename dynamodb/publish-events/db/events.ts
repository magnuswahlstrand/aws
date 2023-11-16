import {v4 as uuid} from "uuid";

const schema = {
    model: {
        version: "1",
        service: "everything",
        entity: "event",
    },
    attributes: {
        ID: {
            type: "string",
            required: true,
            readOnly: true,
            default: () => uuid()
        },
        type: {
            type: "string",
            required: true,
            readOnly: true,
        },
        entityID: {
            type: "string",
            required: true,
            readOnly: true,
        },
        createdAt: {
            type: "string",
            set: () => new Date().toISOString(),
            readOnly: true,
        }
    },
    indexes: {
        events: {
            pk: {
                field: "pk",
                composite: ["ID", "type",],
            },
            sk: {
                field: "sk",
                composite: [],
            }
        }
    }
} as const

export default schema;
