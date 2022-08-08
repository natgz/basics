// 2. Print a table containing multiplication tables
// Can you print a table that contains all the answers to the multiplication tables from 1 through 10?

// Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

const multiplicando = [1,2,3,4,5,6,7,8,9,10]

for (let multiplicador = 0; multiplicador <= 12; multiplicador++) {
multiplicando.forEach ((h) => {
        result = multiplicador * h
        console.log (result)
    })
 }
