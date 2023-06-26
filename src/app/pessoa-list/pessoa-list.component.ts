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

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.carregarPessoas();
  }

  carregarPessoas() {
    this.pessoaService.getPessoas().subscribe(pessoas => {
      this.pessoas = pessoas;
    });
  }
}
