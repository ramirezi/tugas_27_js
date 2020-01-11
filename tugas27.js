function panggil(){
  var kata1 = ["No"," rumah saya ",30, "A"];
  var kata2 = ["Jalan pangeran Tirtayasa No ", 70];
  var tampung = "";
  var tampung1 = "";
  for(i=0;i<kata1.length;i++){
    tampung=tampung+kata1[i];
  }
  console.log(tampung);
  for(i=0;i<kata2.length;i++){
    tampung1=tampung1+kata2[i];
  }
  console.log(tampung1);
}
panggil();
