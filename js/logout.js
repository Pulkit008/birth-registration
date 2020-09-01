let token = localStorage.getItem('bircer_token');

document.addEventListener('DOMContentLoaded',function(){
    var logout=document.getElementById('logout')
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            user.getIdToken().then((data)=>{
                localStorage.setItem('bircer_token',data);
            })
        }
        else{
            localStorage.removeItem('bircer_token')
            window.location.href="/index.html"
        }
    })
    logout.addEventListener('click',(event)=>{
        event.preventDefault()
        firebase.auth().signOut().then(function() {
            firebase.auth().onAuthStateChanged(function(user){
                if(user){
                }
                else{
                    localStorage.removeItem('bircer_token')
                    window.location.href="/index.html"
                }
            })
        }).catch(function(error) {
            alert('Error connecting to server.')
        });
    })
})