const  numbers = [5,3,4];

numbers.sort((a,b)=>a-b); //crescente
numbers.sort((a,b)=>b-a); //descrecente

console.log(numbers);

const arquivos: string[] = ["item10.png", "item01.png", "item09.png"];
console.log(arquivos);
arquivos.sort((a,b) => a.localeCompare(b));
console.log(arquivos);

"anisio".localeCompare("ANISIO", undefined, {sensitivity:'base'}); 
"teste". toLocaleLowerCase().localeCompare("TESTE".toLocaleLowerCase()); //TRANSFORMA AS DUAS PALAVRAS EM LETRA MINUSCULA
