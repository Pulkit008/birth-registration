var email=document.getElementById('email')
var password=document.getElementById('password')
var button=document.getElementById('submit')
var token=localStorage.getItem('bircer_token')


document.addEventListener('DOMContentLoaded',function(){
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            user.getIdToken().then((data)=>{
                localStorage.setItem('bircer_token',data);
                window.location.href="/adminOption.html"
            })
        }
        else{
            localStorage.removeItem('bircer_token')
        }
    })
    button.addEventListener('click',function(event){
        event.preventDefault()
        if(loginvalidate('email','msg1','password','msg2'))
            firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
                alert('Wrong Credentials')
                return;
            });
    })
})