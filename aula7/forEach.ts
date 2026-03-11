const  numbers = [1,2,3,4,5];
const frutas: string[] = ['Maça', 'Banana', 'Uva'];

frutas.forEach((item, index)=>{
    console.log(`${index}: ${item}`);
});

let contador: number = 0;

numbers.forEach(itens => {
    contador += itens;
});

numbers.forEach((n, index) =>{
    numbers[index] = n *2;
});


type produtos = {id:number; nome: string; preco: number}
const produto: produtos[] = [
    {id:1, nome: 'mouse', preco:50},
    {id:2, nome: 'teclado', preco:150}
];

produto.forEach(p =>{
    p.nome = p.nome + "Qualquer coisa";
});

