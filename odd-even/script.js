let Num = Number(
  prompt("Çift mi  tek mi olduğunu hesaplamak için bir sayı giriniz.")
);
let result = Num / 2;

if (result === 0) {
  alert("girdiğiniz sayı çifttir.");
} else {
  alert("girdiğiniz sayı tektir.");
}
