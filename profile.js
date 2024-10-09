function submit(){

    let params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };


    const serviceid="service_wurgiwb";
    const templateid="template_yznqnbf";

    emailjs.send(serviceid,templateid,params).then((res)=>{
         document.getElementById("name").value="";
         document.getElementById("email").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";
        console.log(res);

        alert("succesfully submited");

    })
.catch((err)=>console.log(err)
);
}
    