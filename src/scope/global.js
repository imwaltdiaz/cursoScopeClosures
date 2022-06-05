var hello = "hello";
var hello = "hello +"

let world = "Hello World";

const helloWorld = "Hello World!";


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = "im global";
}

helloWorld();
console.log(globalVar)

const anotherFunction = () => {
    var localVar = globalVar = "Im Global";
}
anotherFunction()
console.log(globalVar)

//var funcionará como variable global pero será reasignada
//Con let y const no podremos reasignar un valor