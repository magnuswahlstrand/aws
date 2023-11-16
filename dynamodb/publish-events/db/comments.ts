const schema = {
    model: {
        version: "1",
        service: "everything",
        entity: "comments",
    },
    attributes: {
        commentID: {
            type: "string",
            required: true,
        },
        text: {
            type: "string",
            required: true,
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
} as const;

export default schema;
