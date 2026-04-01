import {Endereco} from "./endereco"
import {Contato} from "./contato"
import {Pessoa} from "./pessoa"
import {Remedio} from "./remedio"
import {Medico} from "./medico"
import {Paciente} from "./paciente"
import {Prontuario} from "./prontuario"

const endereco = new Endereco ("Rua A", 123 , " Boituva ", "18558050");

const contato = new Contato ("15991558573", "beatriz2040@gmail.com");

const pessoa = new Pessoa ("Beatriz", 19, endereco, contato);

const remedio1 = new Remedio ("Amitril", "1 comprimido por dia");
const remedio2 = new Remedio ("Vertigiun", "1 comprimido por dia");


const paciente = new Paciente (pessoa, [remedio1, remedio2]);

const medico = new Medico (pessoa, "Radiologista");

const prontuario = new Prontuario (paciente, medico);