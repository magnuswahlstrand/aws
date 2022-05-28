
const awsConfig = {
    Auth: {
        identityPoolId: 'eu-west-1:f306a1b2-39e9-43bc-8d96-45247da66560', // example: 'us-east-2:c85f3c18-05fd-4bb5-8fd1-e77e7627a99e'
        region: 'eu-west-1', // example: 'us-east-2'
        userPoolId: 'eu-west-1_9IFE8mFMV', // example: 'us-east-2_teEUQbkUh'
        userPoolWebClientId: 'vr4baaj78ht6lk70a6i7lhr0l' // example: '3k09ptd8kn8qk2hpk07qopr86'
    },
    API: {
        endpoints: [
            {
                name: 'MyCognitoAPI',
                endpoint: '', // example: 'https://u8swuvl00f.execute-api.us-east-2.amazonaws.com/prod'
                region: '' // example: 'us-east-2'
            }
        ]
    },
    Storage: {
        bucket: '', //example: 'wildrydesbackend-profilepicturesbucket-1wgssc97ekdph'
        region: '' // example: 'us-east-2'
    }
}

export default awsConfig;
