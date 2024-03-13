for(let x = 0; x < 5; x++){
    console.log(x)
}

const numbers = [0, 1, 2, 3, 4]

for(const number of numbers){
    console.log(number)
}

let x = 0

while(x < 5){
    console.log(x)
    x++
}

const greeting = (name) => {
    if(name === "Alice"){
        return "Hello Alice!"
    }else if(name === "Bob"){
        return "Hello Bob!"
    }else if(name === undefined){
        return `No name was used`
    }else{
        return `You're not Alice or Bob`
    }
}

console.log(greeting('Alice'))
console.log(greeting("Bob"))
console.log(greeting())
console.log(greeting('Bill'))