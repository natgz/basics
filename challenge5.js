// 5. Create a function that reverses an array
// This challenge is particularly helpful if you're planning to become a Data Scientist. 
// Manipulating data is a significant part of the role, 
// and building the foundations now will help you later down the road when you're working with large databases.
// Start small here and work your way up. Begin with an array of 5 numbers, 
// and then try your program with a larger array to verify its success.

const array = [
    13, 13, 7, 9, 12,
     6,  4, 6, 7,  8,
     1,  1]

const rev_array = []
const array_length = array.length -1

for (let position = array_length; position >= 0; position--) {
    rev_array.push(array[position])
}

console.log (rev_array)