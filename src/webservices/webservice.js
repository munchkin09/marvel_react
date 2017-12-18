import * as Constants from './constants';
var api = require('marvel-comics-api')


export function fetch(url) {
    return new Promise(function(resolve, reject) {
        api('characters', {
            publicKey: Constants.PUBLIC_KEY,
            privateKey: Constants.PRIVATE_KEY,
            timeout: 3000,
            query: {
                limit: 25,
            }
        }, function(err, body) {
            if(err) reject(err)
            resolve({data: body.data.resulst, total: body.data.total})
            
        })
    })
}