const inputField = document.getElementById("input");
const button = document.getElementById("button");
const msgDiv = document.getElementById("message");



function palindrome(text) {
    const reversed = Array.from(text).reverse().join("");

    return reversed === text;
}

button.addEventListener("click", function(event){
    const value = inputField.value;

    if (palindrome(value)) {
        msgDiv.innerText = "Yes it's a palindrome!";
    } else {
        msgDiv.innerText = "No it's not a palindrome :(";
    }
});