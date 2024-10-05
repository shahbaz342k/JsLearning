// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function typecheck(obj){
    
    let res = {};

    for( const key in obj ){

        let splitVal=key.split("_");
        let typeTempKey = splitVal[1];

        // console.log( typeof(obj[key]) )

        if( typeTempKey == 'bool' ){
            
            if( typeof(obj[key]) != 'boolean' ){
                let reskey1 = key;
                res.reskey1 = 'item should be boolean';
            }
        }else if( typeTempKey == 'number' ){
            if( typeof(obj[key]) != 'number' ){
                let reskey2 = key;
                res.reskey2 = 'item should be number';
            }
        }else if( typeTempKey == 'string' ){
            
            if( typeof(obj[key]) != 'string' ){
                let reskey3 = key;
                res.reskey3 = 'item should be string';
            }
        }else if( typeTempKey == 'int' ){
            
            if( Number.isInteger(obj[key]) != true ){
                let reskey4 = key;
                res.key = 'item should be integer';
            }
        }else if( typeTempKey == 'float' ){
            
            if( Number.isInteger(obj[key]) == true ){
                let reskey5 = key;
                res.key = 'item should be float';
            }
        }
    }

    // console.log(res)
    if( Object.keys(res).length != 0 ){
        return res;
    }else{
        return true;
    }
    
}

const obj = {
    emp_bool:true,
    age_int: 35.5,
    name_string:null,
    total_float:40,
    total_number:2.5,
    
}
// console.log( Number.isInteger(34.5) )
const result = typecheck(obj)
console.log( result )