let mes = new Date();
mes = mes.getMonth();
if(mes>=0 && mes<=2){
    console.log("As chuvas de meteoros do primeiro trimestre são: \n\n"+ "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03");
}
else if(mes>=3 && mes<=5){
    console.log("As chuvas de meteoros do segundo trimestre são: \n\n"+ "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06");
}
else if(mes>=6 && mes<=8){
    console.log("As chuvas de meteoros do terceiro trimestre são: \n\n"+ "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09");
}
else if(mes>=9 && mes<=11){
    console.log("As chuvas de meteoros do quarto trimestre são: \n\n"+ "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12");
}