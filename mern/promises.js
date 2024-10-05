function register() {
    return new Promise((resolve, reject) => {
        let data = true;
        setTimeout(() => {
            if( data ){
                console.log('register done')
                resolve()
            }else{
                reject('there was an error in the register')
            }
           
        }, 2000)
    })

}

function sendWelcomeEmail() {
    return new Promise((resolve, reject) => {
        let data = false;
        setTimeout(() => {
            if( data ){
                console.log('welcome email done')
                resolve()
            }else{
                reject('there was an error in the email sending')
            }
            
        }, 3000)
    })
}

function login() {
    return new Promise((resolve, reject) => {
        let data = true;
        setTimeout(() => {
            if( data ){
                console.log('login done');
                resolve();
            }else{
                reject('there was an error in the login')
            }
          
        }, 1000)
    });
}

function getUserData() {
    return new Promise((resolve, reject) => {
        let data = true;
        setTimeout(() => {
            if( data ){
                console.log('user data done')
                resolve()
            }else{
                reject('there was an error in the user data fetching')
            }
           
        }, 1500)
    });
}

// using promises to acheive desired result
register()
        .then(sendWelcomeEmail)
        .then(login)
        .then(getUserData)
        .catch(err => {
            console.log('Error: ', err)
        })


// login(getUserData);
console.log('some other work of application');