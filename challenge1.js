// 1. Print all even numbers from 0 – 10
// While you could simply print the even numbers, 
// get creative and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

for (let index = 0; index <= 10000; index++) {
    
    if (Number.isInteger (index/2)) {
        console.log (index)
    }
}


