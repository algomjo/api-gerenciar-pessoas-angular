import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pessoa: any = {};
  title = 'Gerenciar Pessoas';
  selection: any;


  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post('http://localhost:8080/pessoas', this.pessoa)
      .subscribe(response => {
        console.log('Dados enviados com sucesso!');
        // Aqui você pode adicionar a lógica de manipulação da resposta da API, se necessário
      }, error => {
        console.error('Erro ao enviar dados:', error);
        // Aqui você pode adicionar a lógica de tratamento de erro, se necessário
      });
  }
}
