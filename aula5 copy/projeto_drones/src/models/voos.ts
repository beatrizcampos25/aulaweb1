import {Detalhes} from "./detalhes"
import {Pacote} from "./pacote"

export class Voos {
    id: string 
    data:Date
    detalhes: Detalhes
    listaPacotes: Pacote[]

     constructor (id:string, data:Date, detalhes:Detalhes, listaPacotes:Pacote[]) {
     this.id = id
     this.data = data
     this.detalhes = detalhes
     this.listaPacotes = listaPacotes.map (( item : any ) => {
        return new Pacote ( item.peso,item.descricao ) ;
     }) ;
     }

    calcularPesoTotal(): number {
        return this.listaPacotes.reduce((total, pacote) => total + pacote.peso, 0);
    }
     
    exibirDados(): void {
        console.log(`O ID do voo é: ${this.id}`);
        console.log(`Sensores disponíveis: ${this.detalhes.sensores}`);
        console.log(`Peso total dos pacotes: ${this.calcularPesoTotal()} kg`);
    }
}


 
 
 