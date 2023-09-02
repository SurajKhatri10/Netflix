export const validateData = (email,password)=>{
    const emailPattern = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const validEmail = emailPattern.test(email);
    const validPassword = passwordPattern.test(password);

    var message = null;
    if(!validEmail){
        message = "Invalid email";
        return message;
    }
    if(!validPassword) {
        message = "Invalid password";
        return message;
    }

    return message;
}