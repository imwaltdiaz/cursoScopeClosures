const fruits = () => {
    if (true) {
        var fruits1 = "apple";
        let fruits2 = "banana";
        const fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    
    }
    console.log(fruits1);

}
fruits();

let x = 1
{
    let x = 2;
    console.log(x);
}
console.log(x)
//Primero muestra el 2, luego el 1
//Primero muestra el bloque, luego el global


var x = 1
{
    var x = 2;
    console.log(x);
}
console.log(x)
//Sale 2, luego 2, el valor cambiado de var dentro del bloque, se cambia globalmente. si queremos cambiar durante un bloque, mejor usar let

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};
anotherFunction();
//te mostrará 10, 10 ,10... porque trabaja con el último valor que da el for
const anotherFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000)
    }
};
anotherFunction();
//Funciona correctamente.

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){
        console.log(i)
    }
};
anotherFunction();