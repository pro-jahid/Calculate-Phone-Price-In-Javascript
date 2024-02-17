
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('number-input');
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
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotatlElement = document.getElementById('case-total');
    caseTotatlElement.innerText = caseTotalPrice;
}


document.getElementById('shoping-plus-btn').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    
    updateCaseTotolPrice(newCaseNumber)
   
});


document.getElementById('shoping-defult-btn').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotolPrice(newCaseNumber)
   
    
});