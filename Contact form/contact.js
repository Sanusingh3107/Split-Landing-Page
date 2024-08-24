const form = document.querySelector("form");
const  fullName = document.getElementById("name");
const  email = document.getElementById("email");
const  subject = document.getElementById("subject");
const phone = document.getElementById("phone");
const  mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name : ${fullName.value}<br> Email : ${email.value}<br>
    Phone Number : ${phone.value}<br> Message : ${mess.value}`;
    Email.send({
        SecureToken : "04d99838-3a1e-4f3d-8e8b-d4856a99786c",
        To : 'ksrivastava5002@gmail.com',
        From : "ksrivastava5002@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item");
    for (const item of items){
        if (item.value == ""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && 
    !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")){
    sendEmail();
    form.reset();
    return false;
    }
});

