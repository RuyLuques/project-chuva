import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {
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

  exibirFormulario() {
    this.isFormularioVisivel = true;
    this.mensagemDeSucesso = '';
  }

  mostrarMensagemDeSucesso = false;

  constructor(private router: Router) { }

  enviarFormulario() {
    const sucessoSimulado = true;

    if (sucessoSimulado) {
      this.router.navigate(['/mgsuccess']);
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
