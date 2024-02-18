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
}


function updateTotalPhonePrice (newPhoneNumber){
    const totalPhonePrice = newPhoneNumber * 1219 ;
    const totalPhoneElement = document.getElementById('phone-total');
    totalPhoneElement.innerText = totalPhonePrice;
}

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newphoneNumber = updatePhoneNumber(true)
   updateTotalPhonePrice (newphoneNumber)

   const currentPhoneTotal = getTextElementValueById('phone-total');
   const currentCaseTotal = getTextElementValueById('case-total');
   const currentSobTotal = currentPhoneTotal + currentCaseTotal;
   const subTotalElement = document.getElementById('sub-total');
   subTotalElement.innerText = currentSobTotal;
});


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newphoneNumber = updatePhoneNumber(false)
   updateTotalPhonePrice (newphoneNumber)
})



