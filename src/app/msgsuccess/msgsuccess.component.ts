import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './msgsuccess.component.html',
  styleUrls: ['./msgsuccess.component.scss']
})

export class MsgsuccessComponent {
  title = 'DevChuva';
  assunto: string = '';
  conteudo: string = '';
  isTopicoExpandido = false;
  isFormularioVisivel = false;
  mensagemDeSucesso = '';

  exibirFormulario() {
    this.router.navigate(['/form']);
  }

  mostrarMensagemDeSucesso = true;
  constructor(private router: Router) { }

  redirecionarParaPadrao() {
    this.router.navigate(['/']);
  }
}
