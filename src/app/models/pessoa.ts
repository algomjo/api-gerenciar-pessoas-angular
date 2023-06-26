export interface Pessoa {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  endereco: Endereco; // Adicione o campo de endereço
}

export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string; // Adicione o campo de número da residência
  bairro: string;
  cidade: string;
  uf: string;
}
