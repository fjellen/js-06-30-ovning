

function getVowels(text) {
    const vowels = ["a", "e", "i", "o", "u", "y"];

    return Array.from(text).filter(letter => vowels.includes(letter.toLowerCase()));
}

const result = getVowels("Jag gillar Javascript");

console.log(result);