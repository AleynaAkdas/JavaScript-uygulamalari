let exam1 = Number(prompt("1. sınav notunuzu giriniz :"));

let exam2 = Number(prompt("2. sınav notunuzu giriniz :"));

let finalExam = Number(prompt("Final sınavı sınav notunuzu giriniz :"));

let averageGrade = (exam1*0.3) + (exam2*0.3) + (finalExam*0.4);

if(averageGrade>=60){
    alert("Tebrikler, dersten geçtiniz." + " Not Ortalmanız; " + averageGrade);
    console.log("Tebrikler, dersten geçtiniz." + " Not Ortalmanız; " + averageGrade)
}else{
    alert("Üzgünüz, dersten geçemediniz." + " Not Ortalmanız; " + averageGrade);
    console.log("Üzgünüz, dersten geçemediniz." + " Not Ortalmanız; " + averageGrade )
}