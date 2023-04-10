function caesarDecoder(encodedString, teleFactor) {
    const capitalizedAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const alphabetLength = alphabet.length;
    let decodedString = '';
    for (let char of encodedString) {
        let charIndex = alphabet.indexOf(char);
        if (charIndex === -1) {
            charIndex = capitalizedAlphabet.indexOf(char);
            if (charIndex !== -1) {
                const decodedCharIndex = (charIndex - teleFactor) % alphabetLength;
                const decodedChar = capitalizedAlphabet[decodedCharIndex];
                decodedString += decodedChar;  
            } else {
                decodedString += char;
            }
        } else {
            const decodedCharIndex = (charIndex - teleFactor) % alphabetLength;
            const decodedChar = alphabet[decodedCharIndex];
            decodedString += decodedChar;  
        }
    }
    return decodedString;
}

console.log(caesarDecoder('gFrgh Fdhvdu', 3));