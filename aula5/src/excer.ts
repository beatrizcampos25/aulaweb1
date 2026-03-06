function maiuscula(l:string):string{
    return l.toUpperCase();
}

console.log(maiuscula("Olá mundo"));

const maiusculaLambda =(lt:string):string=>lt.toUpperCase();
console.log(maiusculaLambda("Olá Jenni"));


function elevar(a:number, b:number):number{
    return (a**b);
}

console.log(elevar(2,2));

const elevarLambda =(num1:number, num2: number):number=>num1 ** num2;
console.log(elevarLambda(4,2));

function dobraNumeros(numeros:number[]): number[]{
    numeros.filter((valor, indice, aux) =>{
        aux[indice] = valor * 2;
    });

    return numeros;
}

const valores: number[] = [1, 2, 3];
console.log(dobraNumeros(valores));

type Funcionario = {
    nome : string ;
    cargo : string ;
};
    

const funcionarios : Funcionario [] = [
    { nome : " Marcos ", cargo: "Desenvolvedor" } ,
    { nome : " Fernanda ", cargo: "Gerente" } ,
    { nome : " Carlos ", cargo: "Desenvolvedor" } ,
    { nome : " Joana ", cargo: "Analista" }
];

const cargoDesejado : string = "Desenvolvedor";

function cargoEspecifico(funcionarios : Funcionario [], cargoDesejado:string):Funcionario[]{
    
    return funcionarios.filter(funcionarios => funcionarios.cargo === cargoDesejado);
}

console.log (cargoEspecifico(funcionarios, cargoDesejado));

    
        

    
