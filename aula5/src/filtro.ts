const numeros: number[] = [1,2,3,4,5,6,7,8,1,2];

const semDuplicar = numeros.filter((valor, indice, self) =>{
    return self.indexOf(valor) === indice;
});

let pares = numeros.filter(n => n % 2 === 0);

let maiorQueTres = numeros.filter (n => n > 3);

let valores = [10, null, undefined, 52, 89];
let valoresNaoNulos = valores.filter (v => v != null && v != undefined);

type pessoa ={
    nome: string;
    idade: number
}

const pessoas: pessoa[] = [
    {nome: "Fernando", idade: 30},
    {nome: "Ana", idade: 40},
    {nome: "Luisa", idade: 10},
]

let maiorIdade = pessoas.filter(pessoa => pessoa.idade >= 18);