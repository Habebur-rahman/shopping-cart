// phone section start
document.getElementById('btn-phone').addEventListener('click', function(){
    const phoneField = document.getElementById('input-phone');
    const newPhoneField = phoneField.value;
    const phoneFieldValue = parseInt(newPhoneField);

    const previousValue = phoneFieldValue + 1;
    phoneField.value = previousValue;

     const dollerField = document.getElementById('doller-2');
     const dollerValue = dollerField.innerText;
     const previousDoller = parseInt (dollerValue);

     const doller = previousValue * 1012 ; 
     dollerField.innerText = doller;

})

document.getElementById('btn-phone-2').addEventListener('click', function(){
    const phoneField = document.getElementById('input-phone');
    const newPhoneField = phoneField.value;
    const phoneFieldValue = parseInt(newPhoneField);

    const previousValue = phoneFieldValue - 1;
    phoneField.value = previousValue;

    const dollerField = document.getElementById('doller-2');
     const dollerValue = dollerField.innerText;
     const previousDoller = parseInt (dollerValue);

     const doller = previousValue * 1012 ; 
     dollerField.innerText = doller;
})

// phone section end