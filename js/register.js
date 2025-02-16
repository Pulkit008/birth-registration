let button=document.getElementById('submit')

document.addEventListener('DOMContentLoaded',function(){
    button.addEventListener('click',function(event){
        event.preventDefault()
        if(registervalidate('cname', 'msg1', 'dob', 'msg2', 'pob', 'msg3', 'mothername', 'msg4', 'fathername', 'msg5', 'addr1', 'msg6', 'addr2', 'msg7')===true){
            const user=buildUser();
            console.log(user)
            registerRequest(user)
        }
    })
})

const registerRequest=(user)=>{
    let url="http://localhost:3000/"

    fetch(url+'register',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('bircer_token')
        },
        body:JSON.stringify(user)
    }).then(response=>{
        response.json().then((json)=>{
            console.log(json)
            window.open(url+'certificates/'+json.data.registration_number,'_blank')
        })
    }).catch(error=>{
        alert(error)
    })
}


const buildUser=()=>{
    let candidate_name=document.querySelector('#cname').value
    let sex=document.querySelector('input[name="gender"]:checked').value;
    let date_of_birth=document.querySelector('#dob').value;
    let place_of_birth=document.querySelector('#pob').value;
    let mother_name=document.querySelector('#mothername').value;
    let father_name=document.querySelector('#fathername').value;
    let father_aadhaar=document.querySelector('#fatheraadhaar').value;
    let mother_aadhaar=document.querySelector('#motheraadhaar').value;
    let parent_address_birth=document.querySelector('#addr1').value;
    let parent_address_permanent=document.querySelector('#addr2').value;
    let remarks=document.querySelector('#remarks').value;

    const user={
        candidate_name,
        sex,
        date_of_birth,
        place_of_birth,
        father_name,
        father_aadhaar,
        mother_name,
        mother_aadhaar,
        parent_address_birth,
        parent_address_permanent,
    }
    if(remarks.length>0)    user['remarks']=remarks
    return user;
}
