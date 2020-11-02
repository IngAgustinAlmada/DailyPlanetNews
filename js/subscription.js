window.onload = function() { 

var itemInput = document.getElementById ('fullName');
console.log(itemInput);
itemInput.addEventListener ('blur', fullName);
    
function fullName(){
    if (itemInput.value === '') {  
        console.error("Empty");
}else if(itemInput.value.indexOf(" ") < 0){
            alert("Space Missing");
}else if(itemInput.value.length < 6){
            alert("Less than 6 characters");
}
}

} // window.onload = function() 


