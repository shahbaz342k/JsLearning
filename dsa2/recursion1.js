// get the op of factorial of n

function findFactorialByRecursion(n){
    
    // var startTime = performance.now()

    // base condition
    if( n==1 ){
        return 1;
    }
    // console.log('n', n);
    // recursion call
    let smres = findFactorialByRecursion(n-1);

    // console.log('smres', smres);
    // small calculation
    // console.log('smres * n', smres , n);
    let finalRes = smres * n; 

    // console.log('finalRes',finalRes)

    // var endTime = performance.now()

    // console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
    return finalRes;
}
let sd = findFactorialByRecursion(4);
console.log(sd)

// 1st time: smres = n-1 => 4-1 // 3, and finalRes = smres * n => 3 * 4 // 12
// 2nd time: smres = n-1 => 4-1 // 3, and finalRes = smres * n => 3 * 4 // 12
// 3rd time: smres = n-1 => 4-1 // 3, and finalRes = smres * n => 3 * 4 // 12


