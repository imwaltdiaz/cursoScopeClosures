var a = "Hello";

function hello() {
  let b = "Hello World";
  const c = "Hello World!"
  if (true) {
    let d = "Hello World!!"
    debugger
    //palabra mágica de chrome, nos saldrá un cuadritto en el source de inspeccionar y podremos ver lo que pasa
  }
}
hello();



const moneyBox = () => {
  debugger
  //lo asignas cuando estázs entrando a la función
  var saveCoins = 0;
  const countCoins = (coins) => {
    //y tambien quieres ver que pasa cada vez que entras a esta funcion
      debugger
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4) 
myMoneyBox(6) 
myMoneyBox(10) 
