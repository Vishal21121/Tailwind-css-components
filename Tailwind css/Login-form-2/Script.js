let email, password;

document.getElementById('email').addEventListener('input',(e)=>{
    email = e.target.value;
})
document.getElementById('password').addEventListener('input',(e)=>{
    password = e.target.value;
})

document.getElementById('signin').addEventListener('click',async()=>{
    const data = await fetch('http://localhost:5000/api/login',{
        method:'POST',
        mode:'cors',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            email:email,
            password:password
        })
    })
    console.log(await data.json())
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
    
})