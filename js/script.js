
//* BASIC script

/* const user_km = parseInt(prompt("Quanti KM vuoi percorrere ? "));
const user_age = parseInt(prompt("Inserisci la tua età"));
 */
/* 
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
 */

//* --------------------------------------------------------

const form = document.getElementById('form');
const user_km = document.getElementById('user_km');
const user_age = document.getElementById('user_age');
let output, sconto, original;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
  
  //clear inputs 
  const inputs = document.querySelectorAll('#user_km, #user_age');
  inputs.forEach(input => {
    input.value = '';
  });
});

function myEvent(){
  if(checkInputs()){
    output = calcPrice(parseInt(user_km.value), parseInt(user_age.value));
    console.log(output);
    document.getElementById('data').innerHTML = `
      KM : ${user_km.value} | age : ${user_age.value}
    `;
    document.getElementById('original').innerHTML = `
      Prezzo iniziale : ${original} €
    `;
    document.getElementById('discount').innerHTML = `
      Sconto : - ${sconto} €
    `;
    document.getElementById('output').innerHTML = `
      Prezzo Finale : ${output} €
    `;
  }

}

// checkInputs() controlla che gli input non siano vuoti e non contengano caratteri

function checkInputs(){
  // .trim() rimuove gli spazi bianchi dai campi 
  const kmValue = user_km.value.trim();
  const ageValue = user_age.value.trim();
  let check = true;

  if(kmValue === ''){
    setError(user_km, "Lo spazio non può essere vuoto !");
    check = false
  }else if(isNaN(kmValue)){
    setError(user_km, "Può contenere solo numeri !");
    check = false;
  }
  
  if(ageValue === ''){
    setError(user_age, "Lo spazio non può essere vuoto !");
    check = false;
  }else if(isNaN(ageValue)){
    setError(user_age, "Può contenere solo numeri !");
    check = false;
  }

  return check;
}
// setError() gestisce il messaggio di errore 
function setError(input, message){
  const formControl = input.parentElement;
  const error = formControl.querySelector('span');

  error.innerText = message;
  formControl.className = 'form-control error';
}

function calcPrice(km, age){
  const km_price = 0.21;

  let result = km * km_price;
  original = result.toFixed(2);
  const dis = calcDiscount(age, result);
  sconto = dis.toFixed(2);

  if(dis !== 0)
    result -= dis;
  
  result = result.toFixed(2);
  return result;
}

function calcDiscount(age, result){
  const dis_under18 = 0.20, dis_over65 = 0.40;

  if(age < 18)
    return result * dis_under18;
  else if (age >= 65)
    return result * dis_over65;
  else 
    return 0;
  
}

