
//* BASIC script

const user_km = parseInt(prompt("Quanti KM vuoi percorrere ? "));
const user_age = parseInt(prompt("Inserisci la tua età"));
/*  */
/*  */
// costo x km percorso 
const km_price = 0.21;
// sconti legati all'età
const dis_under18 = 0.20, dis_over65 = 0.40;
// calcolo del prezzo
let result = user_km * km_price;

// controllo se l'età dell'user è soggetta a sconti 
if(user_age < 18)
  result -= result * dis_under18;
else if (user_age >= 65)
  result -= result * dis_over65;

// arrotondamento delle ultime due cifre decimali 
result = result.toFixed(2);
console.log("Prezzo da pagare : " +  result + "€");


//* --------------------------------------------------------

//* ----------------------------------------------------------------

console.log("hello");