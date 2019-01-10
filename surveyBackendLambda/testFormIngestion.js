var AWS = require('aws-sdk');
var uuid = require('uuid');

exports.handler = async (event) => {
    // TODO implement
    var dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});
    var marshalled = AWS.DynamoDB.Converter.marshall(event.queryStringParameters);
    marshalled['phoneNumber'] = {N: '1234567891'};
    var item = {
        Item: marshalled,
        TableName: "surveyData"
    };
    var item2 = {
        Item: {
            phoneNumber: {N: '123456'}
        },
        TableName: "surveyData"
    };
    console.log(marshalled);
    dynamoDB.putItem(item2, (err,data) => { //For some reason the dynamodb call is failing
        if(err) console.log("Error " + err);
        else    console.log(data);
    });
    const response = {
        statusCode: 200,
        body: JSON.stringify(event.queryStringParameters),
    };
    console.log("I did it!");
    return response;
};
