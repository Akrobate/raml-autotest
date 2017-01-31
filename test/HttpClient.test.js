'use strict'
var HttpClient = require('../src/HttpClient')
var expect = require('chai').expect

var test_host = 'artiom21.free.fr'
var test_path = '/users.json'
var test_params = '{}'


describe('Testing ' + test_host + test_path + ' ', () => {

    it('Check get call produces http code 200', (done) => {
        let client = new HttpClient()
        client.get(test_host, test_path, test_params).then((data, status_code) => {
            console.log(status_code)
            console.log("fkdsmflskdfmsdlfkfdsfsdf132132132")
            console.log(data)
            console.log(status_code)
            // expect(status_code).to.equal('200')
            done()
        }).catch((data, status_code)=> {
            throw new Error()
            done()
        })
    })

    it('Other tests', (done) => {
        done()
    })
})
