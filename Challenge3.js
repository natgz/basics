// 3. Create a length converter function
// Let's start with a conversion from kilometers to miles. 
// The function should include the input in kilometers and return the answer in miles.

const converter = (unidad, longitud) => {
    const m = 0.621371
    if (unidad == "km") {
        kilometro_conv = longitud * milla
        return kilometro_conv
    } else if (unidad == "m"){
        milla_conv = longitud/m
        return milla_conv
    } else {
        return "unidad incorrecta"
    }
}

console.log (converter ("cm", 1))