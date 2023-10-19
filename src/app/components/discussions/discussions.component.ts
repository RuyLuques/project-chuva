import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss'],
})
export class DiscussionsComponent {
  title = 'DevChuva';
  assunto: string = '';
  conteudo: string = '';
  isTopicoExpandido = false;
  isFormularioVisivel = false;
  mensagemDeSucesso = '';

  constructor(private router: Router) { }

  exibirFormulario() {
    this.router.navigate(['/form']);
  }
  mostrarMensagemDeSucesso = false;
}
