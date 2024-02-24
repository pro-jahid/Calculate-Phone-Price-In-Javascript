
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTaxElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal (){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSobTotal = currentPhoneTotal + currentCaseTotal;
    setTaxElementValueById('sub-total',currentSobTotal)
   

    const taxAmountString = (currentSobTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTaxElementValueById('tax-amount',taxAmount)

    const finalAmount = currentSobTotal + taxAmount;
    setTaxElementValueById('final-total',finalAmount);
};


function updateQuantityNumber(isIncrease, elementId){
    const caseNumberField = document.getElementById(elementId);
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        console.log(previousCaseNumber);
        if(previousCaseNumber >= 1){
           
            newCaseNumber = previousCaseNumber - 1;
        }
        else{
            newCaseNumber = 0
        }
    }
    caseNumberField.value = newCaseNumber;
    
    return newCaseNumber;
}

function updateTotolPrice(quantity, elementId, price){
    const totalPrice = quantity * price;
    const targetElement = document.getElementById(elementId);
    targetElement.innerText = totalPrice;
}