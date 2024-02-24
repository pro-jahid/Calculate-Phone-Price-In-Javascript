
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newphoneNumber = updateQuantityNumber(true, 'phone-number-field')
    updateTotolPrice(newphoneNumber, 'phone-total', 1219)
   calculateSubTotal();
});


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newphoneNumber = updateQuantityNumber(false, 'phone-number-field')
    updateTotolPrice(newphoneNumber, 'phone-total', 1219)
   calculateSubTotal();
})



