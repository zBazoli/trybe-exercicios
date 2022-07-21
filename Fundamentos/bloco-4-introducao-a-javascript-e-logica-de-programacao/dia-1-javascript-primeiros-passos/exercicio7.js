let notaAluno = 100;

if (notaAluno >= 90 && notaAluno <= 100){
    console.log("A");
}

else if (notaAluno >= 80 && notaAluno <= 89){
    console.log("B");
}

else if (notaAluno >= 70 && notaAluno <= 79){
    console.log("C");
}

else if (notaAluno >= 60 && notaAluno <= 69){
    console.log("D");
}

else if (notaAluno >= 50 && notaAluno <= 59){
    console.log("E");
}

else if (notaAluno < 50 && notaAluno >= 0){
    console.log("F");
}

else if (notaAluno < 0 || notaAluno > 100){
    console.log("Erro");
}