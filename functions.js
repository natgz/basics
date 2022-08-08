const x=2
function mifuncion (a=null) {
    // if (x<1) {
    //     console.log ("si es menor")
    // } else if (x==1){
    //     console.log ("es igual")
    // }else {
    //     console.log ("no aplica")
    // }

    
    // terniario (otro if)

    x<1 ? 
    console.log ("si es menor")
    :
    console.log ("no es menor")
}

mifuncion ()


const arrow = (k,j) => {
    result = 1+2
    k("callback")
    return result

    console.log (1)
}

const a = arrow ((param)=>{console.log(param)},3)
// console.log (a)


