'use strict'
var RamlAutoTest = require('../index')
var RamlAutoRoute = require('raml-autoroute')
var HttpClient = require('../src/HttpClient')

// Loading raml file
var raml_test_filepath = './raml/api.raml'
let raml_auto_route = new RamlAutoRoute(raml_test_filepath)
let auto_route = raml_auto_route.getRoutes()
//console.log(JSON.stringify(raml_auto_route.getRoutes(), null, 2))
// console.log(JSON.stringify(raml_auto_route.getRamlJsonSchema(), null, 2))

/*

for (let i = 0; i < 3; i++){
    describe('RamlAutoTest Test', () => {
        for (let j = 0; j < 2; j++){
            it('Check that absoluteUri is correctly formed', (done) => {
                done()
            })
        }
    })
}

*/
