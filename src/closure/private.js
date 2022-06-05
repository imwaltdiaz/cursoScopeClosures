//person, métodos internos para obtener la informacion de una variable o asignarle un valor, pero nunca lo podremos hacer desde afuera

const person = () => {
  var saveName = "Name";
  //Va a acceder saveName de manera privada
  return {
    getName: () => {
      return saveName;
    },
    setName: (name) => {
      saveName = name;
    }
  };
}

newPerson = person();
console.log(newPerson.getName());
//asignaremos un valor a newPerson
newPerson.setName("Oscar");
console.log(newPerson.getName());
//no podemos reasignar el valor de setname, dependemos de los métodos que hemos hecho para las asignaciones


