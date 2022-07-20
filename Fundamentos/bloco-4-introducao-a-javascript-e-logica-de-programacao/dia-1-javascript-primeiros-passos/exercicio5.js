const num1 = 60;
const num2 = 90;
const num3 = 30;

if (num1 + num2 + num3 == 180){
    console.log("true");
}else if(num1 + num2 + num3 < 180 && num1, num2, num3 >= 0){
    console.log("false");
} else if(num1 || num2 || num3 < 0){
    console.log("Erro");
}