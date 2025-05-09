let day = prompt("Bugün günlerden ne olduğunu söyle sana tail mi söyleyeim!");

if (
  day === "pazartesi" ||
  day === "salı" ||
  day === "çarşamba" ||
  day === "perşembe" ||
  day === "cuma" ||
  day === "Pazartesi" ||
  day === "Salı" ||
  day === "Çarşamba" ||
  day === "Perşembe" ||
  day === "Cuma"
) {
  alert("Bugün çalışmalısın.. Tatil yok :(");
} else if (  day === "cumartesi" ||
    day === "pazar" ||
    day === "Cumartesi" ||
    day === "Pazar") {
  alert("Yat yat Tatil :)");
} else {
    alert("geçerli bir gün girmelisin.")
}


//veyaaa daha az uğraşmalı

//let day = prompt("Bugün günlerden ne olduğunu söyle, sana tatil mi söyleyeyim!").toLowerCase();

//const weekdays = ["pazartesi", "salı", "çarşamba", "perşembe", "cuma"];
//const weekends = ["cumartesi", "pazar"];

//if (weekdays.includes(day)) {
 // alert("Bugün çalışmalısın.. Tatil yok :(");
//} else if (weekends.includes(day)) {
 // alert("Yat yat Tatil :)");
//} else {
 // alert("Geçerli bir gün girmelisin.");
//}
