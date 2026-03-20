type tarefa = {descricao: string, prioridade:number, concluida: boolean};

const tarefas: tarefa[] = [
    {descricao: "Fazer relatorio", prioridade: 2, concluida:false},
    {descricao: "Enviar email", prioridade: 3, concluida:false},
    {descricao: "Reunião com a equipe", prioridade: 1, concluida:false}
];



function imprimirTarefa(descricao:string, indice:number, totalTarefas: number): void{
    console.log(`Tarefa concluida: ${descricao}`);
    console.log(`Progresso: ${indice+1}/ ${totalTarefas}`);
}

function executarTarefa(tarefas:tarefa[], callback: (descricao:string, indice:number, totalTarefas: number) => void, timer:number = 1000){
    tarefas.sort((a,b)=>b.prioridade - a.prioridade);
    let contador = 0;
    const interval = setInterval(()=>{
        if(contador>=tarefas.length || tarefas[contador]?.descricao === "Cancelar"){
            clearInterval(interval);
        }else {
            const tarefa = tarefas[contador];
            if(tarefa){
                tarefa.concluida = true;
                callback(tarefa.descricao,contador, tarefas.length);
                contador++;
            }
        }
    },timer);
}

executarTarefa(tarefas, imprimirTarefa,1500);

