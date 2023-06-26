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

  atualizarPessoa(): void {
    this.pessoaService.atualizarPessoa(this.pessoa)
      .subscribe(
        () => {
          console.log('Pessoa atualizada com sucesso!');
          // Redirecionar ou atualizar a lista de pessoas
        },
        error => {
          console.error('Erro ao atualizar pessoa:', error);
        }
      );
  }
  
  deletarPessoa(): void {
    if (this.pessoa.id) {
      this.pessoaService.deletarPessoa(this.pessoa.id)
        .subscribe(
          () => {
            console.log('Pessoa deletada com sucesso!');
            // Redirecionar ou atualizar a lista de pessoas
          },
          error => {
            console.error('Erro ao deletar pessoa:', error);
          }
        );
    } else {
      console.error('Não é possível deletar uma pessoa sem ID.');
    }
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
