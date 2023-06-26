import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';
import { CepService } from '../services/cep.service';
import { Pessoa, Endereco } from '../models/pessoa';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {
  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  };

  constructor(
    private pessoaService: PessoaService,
    private cepService: CepService,
    private router: Router
  ) {}

  buscarEnderecoPorCep(): void {
    this.cepService.buscarEndereco(this.pessoa.endereco.cep)
      .subscribe(response => {
        this.pessoa.endereco.logradouro = response.logradouro;
        this.pessoa.endereco.bairro = response.bairro;
        this.pessoa.endereco.cidade = response.localidade;
        this.pessoa.endereco.uf = response.uf;
      });
  }

  criarPessoa(): void {
    this.pessoaService.adicionarPessoa(this.pessoa)
      .subscribe(() => {
        console.log('Pessoa criada com sucesso!');
        this.limparCampos();
        this.router.navigate(['/pessoas']);
      });
  }

  limparCampos(): void {
    this.pessoa = {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      endereco: {
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: ''
      }
    };
  }
}
