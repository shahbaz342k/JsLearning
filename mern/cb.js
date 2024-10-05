function register(cb){
    setTimeout(() => {
        console.log('register done')
        cb()
    }, 2000)
}

function sendWelcomeEmail(cb){
    setTimeout(() => {
        console.log('welcome email done')
        cb()
    }, 3000)
}

function login(cb){
    setTimeout(() => {
        console.log('login done');
        cb();
    }, 1000)
}

function getUserData() {
    setTimeout(() => {
        console.log('user data done')
    }, 1500)
}

// call back function to acheive desired result
register( () => {
    sendWelcomeEmail( () => {
        login( () => {
            getUserData();
        })
    })
});

// login(getUserData);
console.log('something done');