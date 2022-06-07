import {APIGatewayProxyHandlerV2} from 'aws-lambda';


export const create_user: APIGatewayProxyHandlerV2 = async function (event) {
    console.log(event)


    return {
        statusCode: 201,
        body: JSON.stringify({
            'name': 'Magnus',
        }),
    }
}
