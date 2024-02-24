
document.getElementById('shoping-plus-btn').addEventListener('click', function(){
    const newCaseNumber = updateQuantityNumber(true, 'number-input');
    
    updateTotolPrice(newCaseNumber, 'case-total', 59)

    calculateSubTotal();
   
});


document.getElementById('shoping-defult-btn').addEventListener('click', function(){
    const newCaseNumber = updateQuantityNumber(false, 'number-input');

    updateTotolPrice(newCaseNumber, 'case-total', 59)
    calculateSubTotal();

});