
function calculatetip(){
  
  //select
const amountle = document.getElementById('amount').value;
const servicele = document.getElementById('service').value;
const personle = document.getElementById('person').value;
const amountel = parseFloat(amountle);
const serviceel = parseFloat(servicele);
const personel = parseFloat(personle);

//condition for excute the formula 

  if ( amountel <= 0 || isNaN(amountel) ){
    alert('Enter Valid Number');
    return;
  }
  if ( personel <= 0 || isNaN(personel)) {
    alert('Enter Atleast 1 Member');
    return;
  }
  
  //calculate value
  
  const tipamount = amountel * serviceel;
  const totalbill = amountel + tipamount;
  const perperson = totalbill / personel;
  const tipperperson = tipamount / personel;
  
  // display
  const tip = document.getElementById('tipAmount').textContent = `$${tipamount.toFixed(2)}`;
  const total = document.getElementById('totalAmount').textContent = `$${totalbill.toFixed(2)}`;
  const per = document.getElementById('perPerson').textContent = `$${perperson.toFixed(2)}`;
  const tipper = document.getElementById('tipPerPerson').textContent = `$${tipperperson.toFixed(2)}`;


};

// add button
document.getElementById('button').addEventListener('click', calculatetip)
