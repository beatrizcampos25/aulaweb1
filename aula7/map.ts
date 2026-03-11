const numeros : number [] = [1 , 2 , 3];

const dobro = numeros.map(n => n*2);
console.log(dobro);



const strings : string [] = numeros.map ( n => `Numero $ { n }`);
console.log(strings);

type produtos = {id:number; nome: string; preco: number}
const produto: produtos[] = [
    {id:1, nome: 'mouse', preco:50},
    {id:2, nome: 'teclado', preco:150}
];

const nome: string[] = produto.map(p => p.nome);
console.log(nome);

const listaFormatada = produto.map (p => ({
    id: p.id,
    label: `${p.nome} -  R$ ${ p . preco . toFixed (2) }`,
    disponivel : true
}) );