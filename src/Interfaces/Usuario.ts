import { Endereco } from "./Endereco";
import { TipoPerfil } from "./TipoPerfil";

export interface Usuario {
    name: string,
    email: string,
    senha: string,
    foto: string,
    tipoPerfil: TipoPerfil,
    lstAddresses: Array<Endereco>,
    unidade: string
}
