
function whatsapp(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("contact").value;
var gender = document.getElementsByName("gender");
var message = document.getElementById("message").value;
var selectedgender;

for (i = 0; i < gender.length; i++) {
        if (gender[i].checked){
            selectedgender = gender[i].value;
        }
}
 
var url = "https://wa.me/91(number)?text="
+"*Name :* "+name+"%0a"
+"*Email :* "+email+"%0a"
+"*Contact number :* "+contact+"%0a"
+"*Gender :* "+selectedgender+"%0a"
+"*Message :* "+message;
 
window.open(url,'_blank').focus();
}
