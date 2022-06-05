const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello)
}

var scope = "I am global";

const functionScope = () => {
    var scope ="I am just a local"
    const func = () => {
        return scope
    }
    console.log(func( ))
}

functionScope();
console.log(scope)
//el scope de local, es con el que trabaja la función, y no toma ni reasigna la variable scope que es local, esto se llama ambito léxico