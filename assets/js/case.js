// body section start
document.getElementById('btn-case').addEventListener('click', function(){
    const caseField = document.getElementById('input-case');
    const caseFieldValue = caseField.value ;
    const caseNumber = parseInt (caseFieldValue);

    const previousCaseValue = caseNumber + 1 ;
    caseField.value = previousCaseValue;

    
    const dollerField = document.getElementById('doller');
    const newDollerField = dollerField.innerText;
    const previousDoller = parseInt (newDollerField);

    const previousDollerValue = previousCaseValue  * 49;
    dollerField.innerText = previousDollerValue;

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

  
} );

document.getElementById('btn-case-1').addEventListener('click', function(){
    const caseField = document.getElementById('input-case');
    const caseFieldValue = caseField.value ;
    const caseNumber = parseInt (caseFieldValue);

    const previousCaseValue = caseNumber - 1 ;
    caseField.value = previousCaseValue;

    const dollerField = document.getElementById('doller');
    const newDollerField = dollerField.innerText;
    const previousDoller = parseInt (newDollerField);


    const previousDollerValue = previousCaseValue * 49;
    dollerField.innerText = previousDollerValue;

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


// body section end