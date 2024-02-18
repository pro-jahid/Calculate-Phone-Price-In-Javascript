function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
   
    let newphoneNumber;

    if(isIncrease === true){
        newphoneNumber = previousPhoneNumber + 1 ;
    }
    else{
        newphoneNumber = previousPhoneNumber - 1 ;
    }
    phoneNumberField.value = newphoneNumber;
    return newphoneNumber;
};