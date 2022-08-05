function sendMail(){
    document.getElementById("load").style="display:inline-block"
    var name=document.getElementById("name").value
    var email=document.getElementById("email").value
    var body=document.getElementById("message").value
    console.log(name+"  "+email+"  "+body)

    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "email": email,
    "name": name,
    "body": body
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://backendresume.herokuapp.com/login", requestOptions)
    .then(response => response.text())
    .then(result => {
        if(result=="success"){
            alert("Message sent successfuly")
        }
        else{
            alert("Please check your mail id")
        }
        document.getElementById("name").value=""
        document.getElementById("email").value=""
        document.getElementById("message").value=""
        document.getElementById("load").style="display:none"
    })
    .catch(error => console.log('error', error));

    

   

}

