// function updatePhoneNumber (incress){
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberString);
   
//     let newphoneNumber;

//     if(incress === true){
//         newphoneNumber = previousPhoneNumber + 1 ;
//     }
//     else{
//         newphoneNumber = previousPhoneNumber - 1 ;
//     }
//     phoneNumberField.value = newphoneNumber;
//     return newphoneNumber;
// }


// function updateTotalPhonePrice (newCaseNumber){
//     const totalPhonePrice = newCaseNumber * 1219 ;
//     const totalPhoneElement = document.getElementById('phone-total');
//     totalPhoneElement.innerText = totalPhonePrice;
// }


// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     const incress = updatePhoneNumber(true)
//    updatePhoneNumber(incress);
//    updateTotalPhonePrice (newCaseNumber)
// })


// document.getElementById('btn-phone-minus').addEventListener('click', function(){
//     const incress = updatePhoneNumber(false)
//    updatePhoneNumber(incress);
//    updateTotalPhonePrice (newCaseNumber)
// })



function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('phone-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}


function updateCaseTotolPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 1219;
    const caseTotatlElement = document.getElementById('phone-total');
    caseTotatlElement.innerText = caseTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    
    updateCaseTotolPrice(newCaseNumber)
   
});


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotolPrice(newCaseNumber)
   
    
});