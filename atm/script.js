let yeniSatir = "\r\n";

let bakiye = 10000;

let metin =
  "1-Bakiye Görüntüleme" +
  yeniSatir +
  "2-Para Çekme" +
  yeniSatir +
  "3-Para Yatırma" +
  yeniSatir +
  "4-Çıkış" +
  yeniSatir +
  "Lütfen yapmak istediğiniz işlemi değer olarak seçiniz.";

let secim = prompt(metin);

switch (secim) {
  case "1":
    alert("Bakiyeniz :" + bakiye);
    break;

  case "2":
    let cekilecekTutar = Number(prompt("lütfen çekmek istediğiniz tutarı giriniz :"));
    if (cekilecekTutar < bakiye) {
     bakiye = bakiye - cekilecekTutar;
      alert("kalan bakiye :" + bakiye);
    } else {
      alert(
        "Yetersiz bakiye!" +
          yeniSatir +
          "Bakiyeniz :" +
          bakiye +
          " " +
          "Çekilmek istenen tutar:" +
          cekilecekTutar
      );
    }
    break;

  case "3":
    let yatirilacakTutar = Number(
      prompt("Lütfen yatırmak istediğiniz tutarı giriniz :")
    );
    bakiye = bakiye + yatirilacakTutar;
    alert("Güncel bakiyeniz :" + bakiye);
    break;

  case "4":
    console.log("Sistemden çıkış yapılmıştır.");
    break;

  default:
    alert("Lütfen 1 ve 4 arasında bir değer giriniz !");
    break;
}
