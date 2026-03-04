function mensagem (f:string):string{
    return f;
}

const mensagemLambda =(f:string):string => f;

console.log(mensagem("Olá Mundo"));

function soma(a:number, b:number):void{
    console.log(a+b);
}

const somaLambda = (a:number, b:number):void=>
console.log(a+b);

function saudacao(nome:string="visitante"):string{
    return `olá visitante`
}

const saudacaoLambda =(nome:string="visitante"):string=>`ola,${nome}`
saudacaoLambda("ads");
saudacao("ADS");
saudacao();

function mult (a:number, b:number){
    return a*b;
}

//valores opcionais

const multiplicarOpcional = (a:number, b?:number):number =>{
    if(b===undefined){
        return a;
    }
    return a*b;
}

multiplicarOpcional(1);
multiplicarOpcional(1,2);

const multiplicarOpcionalTernario = (a:number, b?:number): number => (b===undefined) ? a:a*b;

//operador colecencia nula

const multiplicarColecencia =(a:number, b?:number): number => a*(b??1);

