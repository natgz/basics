// 4. Calculate the sum of numbers within an array

function generateRandomInteger(max, type = null) {
    const random = Math.random();
    const sign = random <.5 ? random * -1 : random * 1

    switch (type) {
        case "natural":
            return Math.floor(random * max) + 1;
            
        case "integer":
            return Math.floor(sign * max) + 1;

        default:
            return Number((sign * max).toFixed(2))
    }

}

function generate_random_array (array_length, max_value, type ) {
    let array = []
    for (let index = 0; index < array_length; index++) {
       array.push(generateRandomInteger (max_value, type))       
    }
    return array
}

const array = generate_random_array (12, 15, "natural")
console.log (array)

const sumWithInitial = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue
)
console.log (sumWithInitial)