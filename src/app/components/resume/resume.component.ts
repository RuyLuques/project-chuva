import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  title = 'DevChuva';
  assunto: string = '';
  conteudo: string = '';
  isTopicoExpandido = false;
  isFormularioVisivel = false;
  mensagemDeSucesso = '';

  expandirTopico() {
    const conteudoAdicional = document.querySelector('.comments-container') as HTMLElement;
    const mensagemExpandida = document.querySelector('.mensagem-expandida') as HTMLElement;
    const botaoVerMais = document.querySelector('.btn-show-more') as HTMLAnchorElement;

    if (conteudoAdicional && mensagemExpandida && botaoVerMais) {
      conteudoAdicional.classList.toggle('expandido');
      mensagemExpandida.style.display = conteudoAdicional.classList.contains('expandido') ? 'block' : 'none';
      botaoVerMais.style.display = 'none';
    }
  }
}
