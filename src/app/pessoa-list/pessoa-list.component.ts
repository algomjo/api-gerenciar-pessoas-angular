import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {
  pessoas: Pessoa[] = [];
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'telefone', 'acoes'];

  constructor(private pessoaService: PessoaService) {}

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
  }

  deletarPessoa(id: number) {
    // Implemente a lógica para deletar a pessoa pelo ID
  }
}
