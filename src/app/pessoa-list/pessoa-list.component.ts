import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  pessoas: Pessoa[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'endereco', 'acoes'];
  pessoaSelecionada: Pessoa | null = null;


  constructor(private pessoaService: PessoaService, private router: Router) {}

  ngOnInit() {
    this.obterPessoas();
  }

  obterPessoas() {
    this.pessoaService.getPessoas().subscribe(pessoas => {
      this.pessoas = pessoas;
    });
  }

  editarPessoa(pessoa: Pessoa) {
    // Implemente a lógica para editar a pessoa
    //this.router.navigate(['/editar-pessoa', pessoa.id]);
    this.pessoaSelecionada = { ...pessoa };
    this.pessoaSelecionada.endereco = { ...pessoa.endereco };
  }

  salvarEdicao() {
    if (this.pessoaSelecionada) {
      this.pessoaService.atualizarPessoa(this.pessoaSelecionada)
        .subscribe(
          () => {
            console.log('Pessoa atualizada com sucesso!');
            this.pessoaSelecionada = null; // Limpa a pessoa selecionada
          },
          error => {
            console.error('Erro ao atualizar pessoa:', error);
          }
        );
    }
  }

  deletarPessoa(id: number) {
    this.pessoaService.deletarPessoa(id).subscribe(
      () => {
      console.log('Pessoa deletada com sucesso!');
      // Atualizar a lista de pessoas após a exclusão
      this.obterPessoas();
      },
      error => {
      console.error('Erro ao deletar pessoa:', error);
      }
      );
  }

  cancelarEdicao() {
    this.pessoaSelecionada = null;
  }

  buscarEnderecoPorCep() {
    if (this.pessoaSelecionada && this.pessoaSelecionada.endereco && this.pessoaSelecionada.endereco.cep) {
      const cep = this.pessoaSelecionada.endereco.cep;
      // Chame o serviço/API para buscar o endereço pelo CEP
      // Exemplo:
      this.pessoaService.buscarEnderecoPorCep(cep).subscribe(endereco => {
        // Atualize o endereço da pessoa selecionada com os dados retornados
        if (this.pessoaSelecionada && this.pessoaSelecionada.endereco) {
          this.pessoaSelecionada.endereco.logradouro = endereco.logradouro;
          this.pessoaSelecionada.endereco.numero = endereco.numero;
          this.pessoaSelecionada.endereco.bairro = endereco.bairro;
          this.pessoaSelecionada.endereco.cidade = endereco.cidade;
          this.pessoaSelecionada.endereco.uf = endereco.uf;
        }
      });
    }
  }

}
