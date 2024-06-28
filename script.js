/*let isStudent = true;

if(isStudent){
    console.log("You are a student!");
}
else {
    console.log("You are not a student");
}*/
let age;
let myButton = document.getElementById("mySubmit");
let myInput = document.getElementById("inputAge");
let result = document.getElementById("resultElement");

myButton.onclick = function()
{

    age = myInput.value;
    age = Number(age);

    if (age >= 100)
{
    
    result.textContent = "You are too old to enter this site.";
}

else if(age == 0)
{
    result.textContent = "You cant enter.You were just born.";
}

else if(age >= 18)
{
    result.textContent = "You are old enough to enter this site.";
}

else if (age < 0)
{
    result.textContent = "Your age can't be below 0.";
}

else 
{
    result.textContent = "You must be 18+ to enter this site.";
}
}
