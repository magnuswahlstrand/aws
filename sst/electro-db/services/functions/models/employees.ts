import {v4 as uuid} from "uuid";

const schema = {
    model: {
        entity: "employees",
        version: "1",
        service: "taskapp",
    },
    attributes: {
        employee: {
            type: "string",
            default: () => uuid(),
        },
        firstName: {
            type: "string",
            required: true,
        },
        lastName: {
            type: "string",
            required: true,
        },
        office: {
            type: "string",
            required: true,
        },
        title: {
            type: "string",
            required: true,
        },
        team: {
            type: ["development", "marketing", "finance", "product", "cool cats and kittens"] as const,
            required: true,
        },
    },
    indexes: {
        employee: {
            pk: {
                field: "pk",
                composite: ["employee"],
            },
            sk: {
                field: "sk",
                composite: [],
            }
        }
    }
} as const;

export default schema;
