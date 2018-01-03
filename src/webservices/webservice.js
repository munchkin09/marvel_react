import * as Constants from './constants';
var api = require('marvel-comics-api')


export function fetch(url) {
    return new Promise(function(resolve, reject) {
        api(url, {
            publicKey: Constants.PUBLIC_KEY,
            timeout: 3000,
            query: {
                limit: 50,
            },
            headers: {
                Referer: Constants.REFERER
            }
        }, function(err, body) {
            if(err) reject(err)
            resolve({data: body.data.results, total: body.data.total})
            
        })
    })
}