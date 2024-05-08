const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

function valcount(list, key){

    if (!(list > 0)){
        return [];
    }

    let count = 0

    for(i = 0; i < list.length; i++){
        if (list[i] == key){
            count++
        }
    }

    return count;
}

const testSearch =
    jsc.forall("array nat", function(arr) {
        
        if (arr.length > 0){

            let temp = valcount(arr, arr[0]);

            let temp2

            asynchFun(arr, arr[0]).then(result => {
                temp2 = result;
            })

            temp2 == temp

        }

        else {return true}
    });

jsc.assert(testSearch);



