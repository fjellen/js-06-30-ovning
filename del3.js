function palindrome(text) {
    const reversed = Array.from(text).reverse().join("");

    return reversed === text;
}


console.log(palindrome("racecar"));