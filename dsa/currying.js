/* 
Write a "mul" function which will properly when invoked as below syntax

Problem
console.log(mul(2)(3)(4)); // output : 24
console.log(mul(4)(3)(4)); // output : 48

*/

function mul(a){
    
    /* return function(b){
        return function(c){
            return a*b*c;
        }
    } */
    return function(b){
        if(b) return mul(a*b);
        return a
    }
    

}
// const resp = mul(2)(3)(4)(3);
// console.log(resp());

// write a function like this 
// add(7).sub(2).mul(5)  is total = 25

const mycalc = {
    total: 0,
    add(a){
        this.total = this.total + a;
        return this;
    },
    sub(a){
        this.total = this.total - a;
        return this;
    },
    mul(a){
        this.total = this.total * a;
        return this;
    },
    devide(a){
        this.total = this.total/a;
        return this;
    }
}
const resp = mycalc.add(8).sub(3).mul(5).devide(2);
console.log(resp.total)