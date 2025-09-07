const Arr = [];

function getId(id) {
  return document.getElementById(id);
}

function getNumber() {
  const number = Number(getId("inputNum").value);
  Arr.push(number);
  getId("txtArray").textContent = Arr.join(", ");
}
// Tổng số dương
function sumPositive() {
  let sum = 0;
  for (let i = 0; i < Arr.length; i++) {
    sum += Arr[i];
  }
  getId("txtSum").innerHTML = sum;
}
// Đếm số dương
function countPositive() {
  let count = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > 0) {
      count++;
    }
  }
  getId("txtCount").innerHTML = count
}
// Tìm số nhỏ nhất
function findMin() {
  let  min = Arr[0]
  for (let i = 1;i < Arr.length;i++){

    
    if(Arr[i] < min ) {
      min = Arr[i];
    }
  }
  getId("txtMin").innerHTML = min;
}
// Tìm số dương nhỏ nhất
function findMinPos() {
  let min = null;
  for(let i = 0; i < Arr.length;i++){
    if(Arr[i] > 0) {
      if (Arr[i] < min || min === null) {
        min = Arr[i];
      }
    }
  }
  getId("txtMinPos").innerHTML = min;
}
// Tìm số chẵn cuối cùng
function findEven() {
  let even = Arr[0];
  for (let i = 0; i< Arr.length;i++){
    if (Arr[i] % 2 == 0) {
      even = Arr[i];
    }
  }
  getId("txtEven").innerHTML = even;
}
// Đổi chỗ
function changePosition() {
  let num1 = getId("inputIndex1").value;
  let num2 = getId("inputIndex2").value;

  let temp = Arr[num1];
  Arr[num1] = Arr[num2];
  Arr[num2] = temp;
  getId("txtChangePos").innerHTML = "Mảng sau khi đổi" + Arr.join(", ")
}
// Sắp xếp tăng dần
function sortIncrease() {
  Arr.sort((a, b) => a - b);

  getId("txtIncrease").innerHTML = "Mảng sau khi sắp xếp: " + Arr.join(", ");
}
  // Số nguyên tố
  function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
function findPrime() {
  let first = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (isPrime(Arr[i])) {
      first = Arr[i];
      break; // dừng ngay khi tìm thấy
    }
  }
  getId("txtPrime").innerHTML = "Số nguyên tố đầu tiên:"+ first;
}
// Đếm số nguyên
function findInt() {
   let count = 0;
  for (let i = 0; i < Arr.length; i++) {
    if ( Number.isInteger(Arr[i])) {
      count++;
    }
  }
  getId("txtInt").innerHTML = "Tổng số nguyên " + count;
}
// So sánh âm dương
function compareNum(){
  let numNeg = 0;
  let numPos = 0;
  for (let i = 0; i < Arr.length;i++){
    if(Arr[i] > 0){
      numPos++;
    }else if(Arr[i] < 0) {
      numNeg++;
    }
  }
    if (numPos > numNeg) {
    getId("txtCompare").innerHTML = "Số dương nhiều hơn số âm";
  } else if (numNeg > numPos) {
    getId("txtCompare").innerHTML = "Số âm nhiều hơn số dương";
  } else {
    getId("txtCompare").innerHTML = "Số âm và số dương bằng nhau";
  }
}