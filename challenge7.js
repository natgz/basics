// 10. Return the number of vowels in a string
// Create a function that'll return an integer of the number of vowels found in a string. 
// This is a great way to practice determining the features of a dataset. 
// If you use JavaScript later in your career, you'll be well-prepared to determine what datasets (or just strings) consist of. 
// If you feel like an extra challenge, consider returning the number of characters.

const string = "hola"

function vowels_qty(str) {
    const vowel = ["a","e","i","o","u"]
    let cont = 0
   for (let index = 0; index < str.length; index++) {
        if ( vowel.find(element => element == str[index])) {
            cont++
        }
   } 
   return cont
}

console.log (vowels_qty(string))