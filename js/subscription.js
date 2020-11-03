window.onload = function() {
    // FULL NAME
    var fullName = document.getElementById ('fullName');
    fullName.addEventListener ('blur', fullNameBlur);
    fullName.addEventListener('focus', fullNameFocus)
    function fullNameBlur(){
        var errorFieldFN = document.getElementById('error-fullname');
        var resultNameLength = fullName.value.length;
        var nameSpace = new RegExp("(?=.*[ ])");
        var resultNameSpace = nameSpace.test(fullName.value);
        if (resultNameLength < 6) {
            errorFieldFN.textContent = 'Less than 6 characters';
        }
        if (!resultNameSpace) {
            errorFieldFN.textContent = 'Space Missing';
        }
        if (resultNameLength > 6 && resultNameSpace) {
            fullName.style.border = "3px solid lawngreen";
            errorFieldFN.style.display = 'none';
            return true;
        } else {
            errorFieldFN.style.display = 'block';
            errorFieldFN.style.color = 'red';
            fullName.style.border = "3px solid red";
            errorFieldFN.style.fontSize = "1.5vw";
            return false;
        }
    }
    function fullNameFocus(){
        var errorFieldFN = document.getElementById('error-fullname');
        errorFieldFN.style.display = 'none';
    }
    // EMAIL
    var eMail = document.getElementById ('email');
    eMail.addEventListener ('blur', eMailBlur);
    eMail.addEventListener ('focus', eMailFocus);
    function  eMailBlur(){
        var errorFieldEM = document.getElementById('error-email');
        var mailArroba = new RegExp("(?=.*[@])");
        var resultMailArroba = mailArroba.test(eMail.value);
        var mailDotCom = new RegExp("[.com]$");
        var resultMailDotCom = mailDotCom.test(eMail.value);
        if (!resultMailArroba) {
            errorFieldEM.textContent = 'Missing @';
        }
        if (!resultMailDotCom) {
            errorFieldEM.textContent = 'Missing ".com"';
        }
        if (resultMailArroba && resultMailDotCom) {
            eMail.style.border = "3px solid lawngreen";
            return true;
        } else {
            errorFieldEM.style.display = 'block';
            errorFieldEM.style.color = 'red';
            eMail.style.border = "3px solid red";
            errorFieldEM.style.fontSize = "1.5vw";
            return false;
        }
    }
    function eMailFocus(){
        var errorFieldEM = document.getElementById('error-email');
        errorFieldEM.style.display = 'none';
    }
    // PASSWORD
    var passWord = document.getElementById ('password');
    passWord.addEventListener ('blur', passWordBlur);
    passWord.addEventListener ('focus', passWordFocus);
    function passWordBlur(){
        var errorFieldPW = document.getElementById('error-password');
        var passwordLength = passWord.value.length;
        var passwordLower = new RegExp("(?=.*[a-z])");
        var resultPasswordLower = passwordLower.test(passWord.value);
        var passwordUpper = new RegExp("(?=.*[A-Z])");
        var resultPasswordUpper = passwordUpper.test(passWord.value);
        var passNumbers = new RegExp("(?=.*[0-9])");
        var resultPassNumbers = passNumbers.test(passWord.value);
        var passwordSpace = new RegExp("(?=.*[ ])");
        var resultPasswordSpace = passwordSpace.test(passWord.value);
        var passwordSymbols = new RegExp("(?=.*[!@#$%^&*+-/])");
        var resultPasswordSymbols = passwordSymbols.test(passWord.value);
        if (passwordLength < 8) {
            errorFieldPW.textContent = 'PW secure has more than 8 characters';
        }
        if (!resultPasswordLower) {
            errorFieldPW.textContent = 'Lower Cases Missing';
        }
        if (!resultPasswordUpper) {
            errorFieldPW.textContent = 'Upper Cases Missing';
        }
        if (!resultPassNumbers) {
            errorFieldPW.textContent = 'Number/s Missing';
        }
        if (resultPasswordSpace) {
            errorFieldPW.textContent = "No spaces in the password";
        }
        if (resultPasswordSymbols) {
            errorFieldPW.textContent = "No symbols like !@#$%^&*+-/ in the password";
        }
        if (passwordLength >= 8 && resultPasswordLower && resultPasswordUpper && resultPassNumbers &&  !resultPasswordSpace && !resultPasswordSymbols) {
            passWord.style.border = "3px solid lawngreen";
            return true;
        } else {
            errorFieldPW.style.display = 'block';
            errorFieldPW.style.color = 'red';
            passWord.style.border = "3px solid red";
            errorFieldPW.style.fontSize = "1.5vw";
            return false;
        }
    }
    function passWordFocus(){
        var errorFieldPW = document.getElementById('error-password');
        errorFieldPW.style.display = 'none';
    }

    // REPEAT PASSWORD
    var confirmPass = document.getElementById ('confirmPass');
    confirmPass.addEventListener ('blur', confirmPassBlur);
    confirmPass.addEventListener ('focus', confirmPassFocus);
    function confirmPassBlur(){
        var errorFieldCPw = document.getElementById('error-confirmPass');
        if (passWord.value == confirmPass.value && confirmPass.value !== "") {
            confirmPass.style.border = "3px solid lawngreen";
            return true;
        }else {
            errorFieldCPw.style.display = 'block';
            errorFieldCPw.style.color = 'red';
            confirmPass.style.border = "3px solid red";
            errorFieldCPw.style.fontSize = "1.5vw";
            if(confirmPass.value == ""){
                errorFieldCPw.textContent = "No Blank";
            }else if(passWord.value !== confirmPass.value){
                errorFieldCPw.textContent = "No Identical Password";
            }
            return false;
        }
    }
    function confirmPassFocus(){
        var errorFieldCPw = document.getElementById('error-confirmPass');
        errorFieldCPw.style.display = 'none';
    }
    // AGE
    var age = document.getElementById ('age');
    age.addEventListener ('blur', ageBlur);
    age.addEventListener ('focus', ageFocus);
    function ageBlur(){
        var errorFieldAge = document.getElementById('error-age');
        var ageNumber = Number(age.value);
        if (/^([0-9])*$/.test(age.value) && Number.isInteger(ageNumber) && ageNumber >=18) {
            age.style.border = "3px solid lawngreen";
            return true;
        }else {
            errorFieldAge.style.display = 'block';
            errorFieldAge.style.color = 'red';
            age.style.border = "3px solid red";
            errorFieldAge.style.fontSize = "1.5vw"
            if (!(/^([0-9])*$/.test(age.value))){
                errorFieldAge.textContent = "Only Numbers";
            }else if (!(Number.isInteger(ageNumber))){
                errorFieldAge.textContent = "Only Integer Number";
            }else if (ageNumber < 18){
                errorFieldAge.textContent = "+18 Only!";
            }
            return false;
        }
    }
    function ageFocus(){
        var errorFieldAge = document.getElementById('error-age');
        errorFieldAge.style.display = 'none';
    }

    //DNI
    var dni = document.getElementById ('dni');
    dni.addEventListener ('blur', dniBlur);
    dni.addEventListener ('focus', dniFocus);
    function dniBlur(){
        var errorFieldDni = document.getElementById('error-dni');
        var dniNumber = Number(dni.value);
        if (/^([0-9])*$/.test(dni.value) && Number.isInteger(dniNumber) && dniNumber >= 1000000 && dniNumber < 100000000) {
            dni.style.border = "3px solid lawngreen";
            return true;
        }else {
            errorFieldDni.style.display = 'block';
            errorFieldDni.style.color = 'red';
            dni.style.border = "3px solid red";
            errorFieldDni.style.fontSize = "1.5vw"
            if (!(/^([0-9])*$/.test(dni.value))){
                errorFieldDni.textContent = "Only Numbers";
            }else if (!(Number.isInteger(dniNumber))){
                errorFieldDni.textContent = "Only Integer Number";
            }else if (dniNumber < 1000000){
                errorFieldDni.textContent = "DNI 7 or + Digits";
            }else if (dniNumber >= 100000000){
                errorFieldDni.textContent = "DNI 8 or - Digits";
            }
            return false;
        }
    }
    function dniFocus(){
        var errorFieldDni = document.getElementById('error-dni');
        errorFieldDni.style.display = 'none';
    }

    //PHONE NUMBER
    var phone = document.getElementById ('phone');
    phone.addEventListener ('blur', phoneBlur);
    phone.addEventListener ('focus', phoneFocus);
    function phoneBlur(){
        var errorFieldPhone = document.getElementById('error-phone');
        var phoneNumber = Number(phone.value);
        var phoneSymbols = new RegExp("(?=.*[-_( )])");
        var resultPhoneSymbols = phoneSymbols.test(phone.value);
        if (phoneNumber >= 1000000 && !resultPhoneSymbols) {
            phone.style.border = "3px solid lawngreen";
            return true;
        }else {
            errorFieldPhone.style.display = 'block';
            errorFieldPhone.style.color = 'red';
            phone.style.border = "3px solid red";
            errorFieldPhone.style.fontSize = "1.5vw";
            if (resultPhoneSymbols){
                errorFieldPhone.textContent = "No '(space) ', '-','_'  or '( )'";
            }else if (phoneNumber < 1000000){
                errorFieldPhone.textContent = "Phone Number 7 or + digits";
            }
            return false;
        }
    }
    function phoneFocus(){
        var errorFieldPhone = document.getElementById('error-phone');
        errorFieldPhone.style.display = 'none';
    }

    //CITY Al menos 3 caracteres. 
    var city = document.getElementById ('city');
    city.addEventListener ('blur', cityBlur);
    city.addEventListener ('focus', cityFocus);
    function cityBlur(){
        var errorFieldCity = document.getElementById('error-city');
        var cityLength = city.value.length;
        var cityNumbers = new RegExp("(?=.*[0-9])")
        var resultCityNumbers = cityNumbers.test(city.value);
        if (cityLength >= 3 && !resultCityNumbers) {
            city.style.border = "3px solid lawngreen";
            return true;
        }else{
            errorFieldCity.style.display = 'block';
            errorFieldCity.style.color = 'red';
            city.style.border = "3px solid red";
            if(cityLength < 3){
                errorFieldCity.textContent = "City name must have 3 or + digits";
            }else if(resultCityNumbers){
                errorFieldCity.textContent = "City name haven't any numbers";
            }
            errorFieldCity.style.fontSize = "1.5vw";
            return false;
        }
    }
    function cityFocus(){
        var errorFieldCity = document.getElementById('error-city');
        errorFieldCity.style.display = 'none';
    }
    //POSTAL CODE  Al menos 3 caracteres.
    var postal = document.getElementById ('postal');
    postal.addEventListener ('blur', postalBlur);
    postal.addEventListener ('focus', postalFocus);
    function postalBlur(){
        var errorFieldPostal = document.getElementById('error-postal');
        var postalLength = postal.value.length;
        var postalNumbers = new RegExp("((?=.*[0-9]))");
        var resultPostal = postalNumbers.test(postal.value);
        if (postalLength >= 3 && resultPostal) {
            postal.style.border = "3px solid lawngreen";;
            return true;
        }else{
            errorFieldPostal.style.display = 'block';
            errorFieldPostal.style.color = 'red';
            postal.style.border = "3px solid red";
            errorFieldPostal.style.fontSize = "1.5vw";
            if (postalLength < 3){
            errorFieldPostal.textContent = "Postal code must have 3 or + digits";
            }else if (!resultPostal){
                errorFieldPostal.textContent = "Postal code contains only numbers";
            }
            return false;
        }
    }
    function postalFocus(){
        var errorFieldPostal = document.getElementById('error-postal');
        errorFieldPostal.style.display = 'none';
    }

    //ADDRESS
    var address = document.getElementById ('address');
    address.addEventListener ('blur', addressBlur);
    address.addEventListener ('focus', addressFocus);
    function addressBlur(){
        var errorFieldAddress = document.getElementById('error-address');
        var addressLength = address.value.length;
        var addressStreet = new RegExp("(?=.*[a-z])|(?=.*[A-Z])");
        var resultAddressStreet = addressStreet.test(address.value);
        var addressSpace = new RegExp("(?=.*[ ])");
        var resultAddressSpace = addressSpace.test(address.value);
        var addressNumbers = new RegExp("(?=.*[0-9])");
        var resultAddressNumbers = addressNumbers.test(address.value);
        if (addressLength >= 5 && resultAddressStreet && resultAddressSpace && resultAddressNumbers) {
            address.style.border = "3px solid lawngreen";
            return true;
        }else{
            errorFieldAddress.style.display = 'block';
            errorFieldAddress.style.color = 'red';
            address.style.border = "3px solid red";
            errorFieldAddress.style.fontSize = "1.5vw";
            if (addressLength < 5){
            errorFieldAddress.textContent = "Address must have more than 5 digits";
            }else if (!resultAddressStreet){
                errorFieldAddress.textContent = "Missing Street Name";
            }else if (!resultAddressSpace){
                errorFieldAddress.textContent = "Missing Space Between";
            }else if (!resultAddressNumbers){
                errorFieldAddress.textContent = "Missing Numbers";
            }
            return false;
        }
    }
    function addressFocus(){
        var errorFieldAddress = document.getElementById('error-address');
        errorFieldAddress.style.display = 'none';
    }

    // Submit
    var button = document.getElementById('submit');
    button.addEventListener("click", submitF);
    function submitF(e) {
        e.preventDefault();
        var errorString = '';
        var completedFields = '';
        var isValid;
        //Full Name
        isValid= fullNameBlur();
        if (isValid) {
            completedFields = 'Name: ' + fullName.value + '\n';
        }else {
            errorString = 'Name is no valid.\n'
        }
        //Email
        isValid = eMailBlur();
        if (isValid) {
            completedFields = completedFields + 'Email: ' + eMail.value + '\n';
        }else {
            errorString = errorString + 'Email is no valid.\n'
        }
        //Password
        isValid = passWordBlur();
        if (isValid) {
            completedFields = completedFields + 'PassWord: ' + passWord.value + '\n';
        }else {
            errorString = errorString + 'PassWord is no valid.\n'
        }
        //Confirm PassWord
        isValid = confirmPassBlur();
        if (isValid) {
            completedFields = completedFields + 'PassWord Confirmed\n';
        }else {
            errorString = errorString + 'Re PassWord is no valid.\n'
        }
        //Age
        isValid = ageBlur();
        if (isValid) {
            completedFields = completedFields + 'Age: ' + age.value + '\n';
        }else {
            errorString = errorString + 'Age is no valid.\n'
        }
        //DNI
        isValid = dniBlur();
        if (isValid) {
            completedFields = completedFields + 'DNI: ' + dni.value + '\n';
        }else {
            errorString = errorString + 'DNI is no valid.\n'
        }
        //PHONE
        isValid = phoneBlur();
        if (isValid) {
            completedFields = completedFields + 'Phone: ' + phone.value + '\n';
        }else {
            errorString = errorString + 'Phone is no valid.\n'
        }
        //City
        isValid = cityBlur();
        if (isValid) {
            completedFields = completedFields + 'City: ' + city.value + '\n';
        }else {
            errorString = errorString + 'City is no valid.\n'
        }
        //Postal
        isValid = postalBlur();
        if (isValid) {
            completedFields = completedFields + 'Postal: ' + postal.value + '\n';
        }else {
            errorString = errorString + 'Postal is no valid.\n'
        }
        //Address
        isValid = addressBlur();
        if (isValid) {
            completedFields = completedFields + 'Address: ' + address.value + '\n';
        }else {
            errorString = errorString + 'Address is no valid.\n'
        }
        alert(completedFields + errorString)
    }
} // window.onload = function()
