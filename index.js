let saveEl = document.getElementById("save-el");
let counterEl = document.getElementById("counter-el");
let counter = 0;

function increment() {
  counter = counter + 1;
  counterEl.innerText = counter;
  console.log("berhasil menambahkan");
}

function decrease() {
  counter--;
  counterEl.innerText = counter;
  console.log("berhasil mengurangi");
}

function save() {
  let counterStr = ` ${counter} - `;
  saveEl.innerText = saveEl.innerText + counterStr;
  console.log(`Menyimpan antrian sebanyak ${counter}`);
}