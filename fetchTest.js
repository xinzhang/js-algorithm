var fetch = require('node-fetch')
var moment = require('moment')

function assetLabelSearch(searchtext) {
    var header = {
        "key" : "632ec0ca-a25e-43d2-93e9-39aa9ffef70d",
        "content-type": "application/json"
    };
    var body = `{
        "label": "${searchtext}",
        "assetTypes": ["pole", "substation", "cubicle", "conductor", "switchabledevice", "zonesubstation"]
    }`

    console.log(`${moment()} send in asset label search ${searchtext} ...`)
    fetch('https://assets.essentialenergy.services/api/asset/byLabel', {method:'POST', body:body, headers:header, timeout: 60*1000})
        .then(function(res) {            
            return res.json()
        }).then(function(json) {
            console.log(`${moment()} radius search return result ...`)
            console.log(json)
        }).catch(function(err) {
            console.log(`${moment()} ${err}`)
        })
}

function assetInRadiusSearch(id) {
    var header = {
        "key" : "632ec0ca-a25e-43d2-93e9-39aa9ffef70d",
        "content-type": "application/json"
    };
    var body = `{
        "options": {
            "longitude":"152.90633310000004",
            "latitude": "-31.430703800000018",
            "radius":"266",
            "maxAssetsPerType": 400,
            "excessAssetStrategy": "DROP",
            "assetTypes": ["pole", "substation", "cubicle", "conductor", "switchabledevice", "zonesubstation"]
        }
    }`

    console.log(`${moment()} ${id} send in radius search ...`)
    fetch('https://assets.essentialenergy.services/api/asset/inradius', {method:'POST', body:body, headers:header, timeout: 60*1000})
        .then(function(res) {            
            return res.json()
        }).then(function(json) {
            console.log(`${moment()} ${id} radius search return result ...`)
            console.log(`result length: ${json.length}`)
        }).catch(function(err) {
            console.log(`${moment()} ${err}`)
        })
}

//assetInRadiusSearch();
for (let i=0;i<20;i++) {
    assetLabelSearch("1234" + i)
}

//console.log('------- inradius search ------- ')
assetInRadiusSearch(1)
assetInRadiusSearch(2)

console.log('------- all request sent ------- ')
