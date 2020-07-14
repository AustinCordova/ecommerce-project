const validation = () => {
    var name = document.getElementById("name--position").value;
    var email = document.getElementById("email--position").value;
    var comments = document.getElementById("comments--position").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if (name.length < 3) {
        text = "&#9888; Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "&#9888; Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if (comments.length >= 100) {
        text = "&#9888; Please Leave Us A Message";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully! :)")
    return true;
}
