const async = require('async')

function asynchFun (list, key){ 

    function equalKey(val, callback){
        if (val == key){
            callback(null, 1)
        }
        else { callback(null, 0)}
    }

    function sum(memo, value, cb){
        cb(null, memo + value)
    }

    return async.map(list, equalKey).then(results => { return async.reduce(results, 0, sum)})

    //async.map(list, equalKey).then(results => { return async.reduce(results, 0, sum).then (results2 => {console.los(results2)})})

    } 

asynchFun([0], 0).then(result => {
        console.log(JSON.stringify(result));
    })
