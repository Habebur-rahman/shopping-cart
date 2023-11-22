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
    //  ------------------------------------------------
     
    const phoneTotal = document.getElementById('doller-2');
    const elementTolal = phoneTotal.innerText;
    const finalTotal = parseInt(elementTolal);

    const caseTotal = document.getElementById('doller');
    const elementCaseTotal = caseTotal.innerText;
    const finalCase = parseInt(elementCaseTotal);


    const finalFullTotal = finalTotal + finalCase;
     const totalDoller = document.getElementById ('total-doller');
     totalDoller.innerText = finalFullTotal;

});

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

     //  ------------------------------------------------
     
    const phoneTotal = document.getElementById('doller-2');
    const elementTolal = phoneTotal.innerText;
    const finalTotal = parseInt(elementTolal);

    const caseTotal = document.getElementById('doller');
    const elementCaseTotal = caseTotal.innerText;
    const finalCase = parseInt(elementCaseTotal);


    const finalFullTotal = finalTotal + finalCase;
     const totalDoller = document.getElementById ('total-doller');
     totalDoller.innerText = finalFullTotal;
});

// phone section end