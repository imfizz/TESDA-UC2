document.forms.myForm;

var myForm = document.forms.myForm;

console.log(myForm);

myForm.name;
myForm.name.value;

myForm.name.value;
myForm.colour.value;

myForm.name.onfocus = function(){
    myForm.name.style.border = "4px solid pink";
};

myForm.name.onblur = function(){
    myForm.name.style.border = "none";
};