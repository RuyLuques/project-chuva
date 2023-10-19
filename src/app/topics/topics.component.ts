import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})

export class TopicsComponent {
  title = 'DevChuva';
  assunto: string = '';
  conteudo: string = '';
  isTopicoExpandido = false;
  isFormularioVisivel = true;
  mensagemDeSucesso = '';

  expandirTopico() {
    const conteudoAdicional = document.querySelector('.custom-card-content-1') as HTMLElement;
    const mensagemExpandida = document.querySelector('.mensagem-expandida') as HTMLElement;
    const botaoVerMais = document.querySelector('.btn-show-more') as HTMLAnchorElement;

    if (conteudoAdicional && mensagemExpandida && botaoVerMais) {
      conteudoAdicional.classList.toggle('expandido');
      mensagemExpandida.style.display = conteudoAdicional.classList.contains('expandido') ? 'block' : 'none';
      botaoVerMais.style.display = 'none';
    }
  }

  constructor(private router: Router) { }

  exibirFormulario() {
    this.router.navigate(['/form']);
  }

  mostrarMensagemDeSucesso = true;

  enviarFormulario() {
    const sucessoSimulado = true;
    console.log('Form submit clicked');

    if (sucessoSimulado) {
      this.mostrarMensagemDeSucesso = true;
    }
  }

    toggleNovoCard() {
    const cardExistente = document.getElementById('card-existente');
    const novoCard = document.getElementById('novo-card');

    if (cardExistente && novoCard) {
      if (novoCard.style.display === 'none') {
        novoCard.style.display = 'block';
      } else {
        novoCard.style.display = 'none';
      }
    }
  }

}
