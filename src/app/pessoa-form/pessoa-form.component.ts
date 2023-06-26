import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  pessoa: Pessoa = {
    id: 0,
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    endereco: {
      cep: '',
      logradouro: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  };

  constructor(
    private cepService: CepService,
    private route: ActivatedRoute,
    private pessoaService: PessoaService
  ) {}

  buscarEndereco() {
    this.cepService.buscarEndereco(this.pessoa.endereco.cep)
      .subscribe(response => {
        this.pessoa.endereco.logradouro = response.logradouro;
        this.pessoa.endereco.bairro = response.bairro;
        this.pessoa.endereco.cidade = response.localidade;
        this.pessoa.endereco.uf = response.uf;
      });
  }

  ngOnInit(): void {
    this.getDadosPessoa();
  }

  getDadosPessoa(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.pessoaService.obterPessoa(id)
        .subscribe(pessoa => {
          this.pessoa = pessoa;
        });
    }
  }

  criarPessoa(): void {
    this.pessoaService.criarPessoa(this.pessoa)
      .subscribe(
        () => {
          console.log('Pessoa criada com sucesso!');
          // Redirecionar ou atualizar a lista de pessoas
        },
        error => {
          console.error('Erro ao criar pessoa:', error);
        }
      );
  }
}
