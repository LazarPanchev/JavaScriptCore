function validate() {
    let userNameInput = $('#username');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let email=$('#email');
    let isCompanyCheck = $('#company');
    let submitBtn = $('#submit');
    let companyInfo=$('#companyInfo');
    let companyNumber = $('#companyNumber');
    let validDiv=$('#valid');
    let isValidData=true;

    isCompanyCheck.on('change', function(){
        if(isCompanyCheck.is(':checked')){
            companyInfo.css('display','block')
        }else{
            companyInfo.css('display','none')
        }
    });

    submitBtn.on('click', function(event){
        event.preventDefault();
        isValidData=true;
        validateForm();
    });

    function validateForm() {
        valideteInputWithRegex(userNameInput,/^[A-Za-z0-9]{3,20}$/g);
        valideteInputWithRegex(email,/^(.*?)@(.*?)(\.(\S*))+$/g);
        if(password.val()===confirmPassword.val()){
            valideteInputWithRegex(password,/^\w{5,15}$/g);
            valideteInputWithRegex(confirmPassword,/^\w{5,15}$/g);
        }else {
            password.css('border','1px solid red');
            confirmPassword.css('border','1px solid red');
            isValidData=false;
        }

        if(isCompanyCheck.is(':checked')){
            let companyNum=Number(companyNumber.val());
            if(companyNum>=1000 && companyNum<=9999){
                companyNumber.css('border', 'none');
            }else {
                companyNumber.css('border', '1px solid red');
                isValidData=false;
            }
        }

        if(isValidData){
            validDiv.css('display','block')
        }
        else {
            validDiv.css('display','none')
        }
    }
    
    function valideteInputWithRegex(input,regex) {
        if(regex.test(input.val())){
            input.css('border','none')
        }else {
            input.css('border','1px solid red');
            isValidData=false;
        }
    }
}
