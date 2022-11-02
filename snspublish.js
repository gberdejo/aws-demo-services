const AWS = require('aws-sdk')

AWS.config.update({region: 'us-west-2'})


const params = {
    Message: `Alerta ViaBcp 
        Tienes una transferencia retenida,
        revisa tu cuenta de ahorros en linea para mas detalles
        aqui el link: https://www.viabcp.com/`,
        TopicArn: 'arn:aws:sns:us-west-2:241307579077:snstopic'
    }
    
const publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'})


exports.handler = async (event) => {
    const res = await publishTextPromise.publish(params).promise()
    
        const response = {
            statusCode: 200,
            body: JSON.stringify(res),
    };
    
    return response;
}