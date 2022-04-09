const aws = require('aws-sdk');
const s3 = new aws.S3();

const reducer = require("./reduce-fns")

// which object keeps our state
const params = { Bucket: 'metric.byoc.de', Key: 'current_temp.json' };

const getState = () => 
    new Promise((res, reject) => 
        s3.getObject(params, (err, data) => !!err ? reject(err) : res(data)))
    .then(data => data.Body.toString())
    .then(JSON.parse);

const setState = (newState) =>
    new Promise((res, reject) => 
        s3.putObject({...params, Body: JSON.stringify(newState)}, (err, data) => !!err ? reject(err): res(data)))

exports.handler = async (event) => {
    return await getState()
        .then(state => reducer(state, event))
        .then(state => setState(state))
        .then(res => res);
};
