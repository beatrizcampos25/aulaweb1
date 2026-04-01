import {Paciente} from "./paciente"
import {Medico} from "./medico"

export class Prontuario {
    paciente: Paciente
    medico: Medico

    constructor (paciente: Paciente, medico: Medico) {
    this.paciente = paciente
    this.medico = medico
    }

    exibirDados(): void{
        console.log(`O nome do paciente é: ${this.paciente.pessoa.nome}.\n O nome do médico é: ${this.medico.pessoa.nome}, Os remédios desse paciente são: ${this.paciente.remedio}`)
    }
}