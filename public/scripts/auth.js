//listen for auth status changes
auth.onAuthStateChanged(user=>{
    if (user)
    {
        
        console.log('user logged in:',user);
        setupUI(user);

    }
    else
    {
        
        console.log('user logged out');
        setupUI();
    }
});


//inserting data into forestore
const insertData=document.querySelector('#signup-form');
insertData.addEventListener('submit', (e)=>{
    e.preventDefault();

    db.collection('userdata').add({
        AadhaarNo:insertData['signup-AadhaarNo'].value,
        PhoneNO:insertData['signup-phoneNo'].value,
        Address:insertData['signup-address'].value,
        City:insertData['signup-city'].value

    }).then(()=>{
        //close the model and reset form data
        const modal=document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close(); 
        insertData.reset();
    }).catch(err=>{
        console.log(err.message);
    });
});





//signup

const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    //getuserinfo
    const email=signupForm['signup-email'].value;
    const password=signupForm['signup-password'].value;

    
    //signup the user
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred.user);
        const modal=document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML='';

    }).catch(err => {
        signupForm.querySelector('.error').innerHTML = err.message;
    });

});

//logout
const logout=document.querySelector('#logout');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    auth.signOut().then(()=>{
        //console.log('user signed out');

    });
});


//login
const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
     

    //get user info
    const email=loginForm['login-email'].value;
    const password=loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred =>{
        //console.log(cred.user);
        //close the login model and reset
        const modal=document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        loginForm.querySelector('.error').innerHTML='';

    }).catch(err => {
        loginForm.querySelector('.error').innerHTML=err.message;
    });
});