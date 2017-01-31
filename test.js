'use strict'
var RamlAutoRoute = require('raml-autoroute')
var HttpClient = require('./src/HttpClient')

// Loading raml file
var raml_test_filepath = './raml/api.raml'
let raml_auto_route = new RamlAutoRoute(raml_test_filepath)
let auto_route = raml_auto_route.getRoutes()
//console.log(JSON.stringify(raml_auto_route.getRoutes(), null, 2))
// console.log(JSON.stringify(raml_auto_route.getRamlJsonSchema(), null, 2))

let client = new HttpClient()
client.get('artiom21.free.frs', '/users.json', {}).then((data) => {
    console.log(data)
}).catch((e)=>{
    console.log(e)
})
