const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetToLowerCase = alphabet.map(letter => letter.toLowerCase())
//decipher the string
let ceaserCipher = (str, key) => {
    let lowerCaseStr = str.toLowerCase()
    let decipher = "";
  
    //decipher each letter
    for (let i = 0; i < lowerCaseStr.length; i++) {
      //if letter is uppercase then add uppercase letters
        const letter = lowerCaseStr[i]
        if(alphabetToLowerCase.find(temp => temp === letter)){
            decipher += String.fromCharCode(
                ((lowerCaseStr.charCodeAt(i) + key - 97) % 26) + 97
              );
        }else {
            decipher += lowerCaseStr[i]
        }
        //else add lowercase letters
       
    }
  
    return decipher;
};


const result = ceaserCipher('VEGA', 363603)
console.log(result)