window.onload = function() { 
// FULL NAME
var fullName = document.getElementById ('fullName');
fullName.addEventListener ('blur', fullNameF);
    
function fullNameF(){
    var nameRegexp = new RegExp("(((?=.*[a-z])(?=.*[A-Z]))(?=.{6,}))");
    var resultName = nameRegexp.test(fullName.value);
    var nameSpace = new RegExp("(?=.*[ ])");
    var resultNameSpace = nameSpace.test(fullName.value);
    if (!resultName) {  
        console.log("Less than 6 characters");
}    
    if (!resultNameSpace) { 
            console.log("Space Missing");
}
}

// EMAIL
var eMail = document.getElementById ('email');
eMail.addEventListener ('blur', eMailF);
function eMailF(){
    var emailRegexp = new RegExp("(((?=.*[a-z])(?=.*[A-Z]))(?=.{1,}))");
    var resultEmail = emailRegexp.test(eMail.value);
    var emailSpace = new RegExp("(?=.*[ ])");
    var resultemailSpace = emailSpace.test(eMail.value);
    var emailArroba = new RegExp("(?=.*[@])");
    var resultEmailArroba = emailArroba.test(eMail.value);
    var emailDotCom = new RegExp("[.com]$");
    var resultEmailDotCom = emailDotCom.test(eMail.value);
    if (!resultEmail) {  
        console.log("No characters");
}    
    if (resultemailSpace) { 
            console.log("No Spaceces");
}
    if (!resultEmailArroba) { 
    console.log("Missing @");
}
    if (!resultEmailDotCom) { 
    console.log("Missing '.com'");
}
}

// PASSWORD
var passWord = document.getElementById ('password');
passWord.addEventListener ('blur', passWordF);
function passWordF(){
    var passwordLower = new RegExp("(?=.*[a-z])");
    var resultPasswordLower = passwordLower.test(passWord.value);
    var passwordUpper = new RegExp("(?=.*[A-Z])");
    var resultPasswordUpper = passwordUpper.test(passWord.value);
    var passNumbers = new RegExp("(?=.*[0-9])");
    var resultPassNumbers = passNumbers.test(passWord.value);
    var passwordLength = new RegExp("(?=.{8,})");
    var resultpasswordLength = passwordLength.test(passWord.value);
    var passwordSpace = new RegExp("(?=.*[ ])");
    var resultPasswordSpace = passwordSpace.test(passWord.value);
    var passwordSymbols = new RegExp("(?=.*[!@#$%^&*+-/])");
    var resultPasswordSymbols = passwordSymbols.test(passWord.value);
    
    if (!resultPasswordLower) {  
        console.log("Lower Cases Missing");
}  
    if (!resultPasswordUpper) {  
    console.log("Upper Cases Missing");
}   
    if (!resultPassNumbers) { 
            console.log("Number/s Missing");
}
    if (!resultpasswordLength) { 
    console.log("Password with more than 8 characters");
}
    if (resultPasswordSpace) { 
    console.log("No spaces in the password");
}
    if (resultPasswordSymbols) { 
    console.log("No symbols like !@#$%^&*+-/ in the password");
}
}

// REPEAT PASSWORD
var confirmPass = document.getElementById ('confirmPass');
confirmPass.addEventListener ('blur', confirmPassF);
function confirmPassF(){
    if (confirmPass.value !== passWord.value) {  
        console.log("No Identical Password");
    }
}

// AGE
var age = document.getElementById ('age');
age.addEventListener ('blur', ageF);
function ageF(){
    var ageChild = new RegExp("^[0-9]$");
    var resultAgeChild = ageChild.test(age.value);
    var ageTeen = new RegExp("[1][0-7]");
    var resultAgeTeen = ageTeen.test(age.value);
   
    if (resultAgeChild || resultAgeTeen){
        
        console.log("+18 Only!")
    }
}

//DNI 
var dni = document.getElementById ('dni');
dni.addEventListener ('blur', dniF);
function dniF(){
var dniRegexp = new RegExp("^[0-9]{7,8}$");
var resultDni = dniRegexp.test(dni.value);
if (!resultDni){
        
    console.log("DNI number only 7 / 8 digits")
}
}

//PHONE NUMBER 
var phone = document.getElementById ('phone');
phone.addEventListener ('blur', phoneF);
function phoneF(){
var phoneNumbers = new RegExp("^[0-9]{7,}");
var resultPhoneNumbers = phoneNumbers.test(phone.value);
var phoneSymbols = new RegExp("(?=.*[-_( )])");
var resultPhoneSymbols = phoneSymbols.test(phone.value);
if (!resultPhoneNumbers){
        
    console.log("Phone Number 7 or + digits")
}
if (resultPhoneSymbols){
        
    console.log("No spaces, hyphens, or parentheses are allowed")
}
}

//CITY Al menos 3 caracteres. 
var city = document.getElementById ('city');
city.addEventListener ('blur', phoneF);
function phoneF(){
var cityRegexp = new RegExp("(((?=.*[A-Z])(?=.*[a-z]))(?=.{3,}))")
var resultCity = cityRegexp.test(city.value);
if (!resultCity){
        
    console.log("City name must have 3 or + digits")
}
}

//POSTAL CODE  Al menos 3 caracteres. 
var postal = document.getElementById ('postal');
postal.addEventListener ('blur', postalF);
function postalF(){
var postalRegexp = new RegExp("((^[0-9])(?=.{2,}))")
var resultpostal = postalRegexp.test(postal.value);
if (!resultpostal){
        
    console.log("Postal Code must have 3 or + digits")
}
}

//ADDRESS  Al menos 5 caracteres, con letras, números y un espacio en el medio
var address = document.getElementById ('address');
address.addEventListener ('blur', addressF);
function addressF(){
var addressRegexp = new RegExp("(((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))(?=.{5,}))");
var resultAddressRegexp = addressRegexp.test(address.value);
var addressSpace = new RegExp("(?=.*[ ])");
var resultAddressSpace = addressSpace.test(address.value);
var addressNumbers = new RegExp("(?=.*[0-9])");
var resultAddressNumbers = addressNumbers.test(address.value);
    
    if (!resultAddressRegexp) {  
        console.log("Address must have more than 5 digits");
}    
    if (!resultAddressSpace) { 
            console.log("Missing Spaceces");
}
    if (!resultAddressNumbers) { 
    console.log("Missing Numbers");
}
}
/*
// Submit
var submit = document.getElementById ('submit');
age.addEventListener ("click", submitF);
function submitF(e){
e.prev
    console.log("clicked");
   }

*/

} // window.onload = function() 
