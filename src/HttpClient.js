"use strict";

var http = require('http');

module.exports = class HttpClient {

    constructor(raml_file) {
        this.raml_file = ""
    }

    get(host, path, params) {
        return new Promise((resolve, reject) => {
            let call = http.get({
                host: host,  // 'personatestuser.org',
                path: path  // '/email'
            }, function(response) {
                var body = '';
                response.on('data', function(d) {
                    body += d;
                });
                response.on('end', function() {
                    if (this.statusCode == '404') {
                        var e = { code: '404' }
                        reject(e)
                    } else {
                        resolve(JSON.parse(body), this.statusCode)
                    }
                });
                response.on('error', function(e) {
                    // console.log("Got error: " + e.message);
                    reject(e, this.statusCode)
                })
            }).on('error', function(e) {
                // console.log("Got error: " + e.message);
                reject(e,0)
            })
        })
    }
}
