let time = setTimeout(timing, 10000);


function timing() {
    document.getElementById("demo").innerHTML="demo"
}
function timing1() {
    clearTimeout(time)
    
}



const object1 = [
    {name: "apple  " , quantity: 200},
    {name: "mango  " , quantity: 100},
    {name: "orange " , quantity: 50},
    {name: "orange2 " , quantity: 300},
    {name: "apple2 " , quantity: 400},
    {name: "mango2 " , quantity: 500}
]


function call({quantity}) {
    return quantity>200 ? "ok" : "low"

    
}
const result = Map.groupBy(object1,call)
console.log(result);
for(let x of result.get("ok")){
    console.log(x);
    
}

