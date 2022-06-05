//Asignar valores y construir nuevos elementos a partir de este mismo
//Ambito lexico: funciones que se ejecutan utilizando la cadena del alcance de donde estaban vigentes. En este caso, el alcance es dentro de la función.
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();
//Sale 1, 2 ,3

const myOtherCount = buildCount(10)
myOtherCount();
myOtherCount();
//10, 11

