import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.css']
})
export class EnderecoFormComponent {
  endereco: any = {};

  constructor(private http: HttpClient) {}

  buscarEndereco(cep: string) {
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .subscribe((data: any) => {
        this.endereco.logradouro = data.logradouro;
        this.endereco.bairro = data.bairro;
        this.endereco.cidade = data.localidade;
        this.endereco.uf = data.uf;
      });
  }

  submitForm() {
    // Lógica para enviar o formulário para a API
  }
}
