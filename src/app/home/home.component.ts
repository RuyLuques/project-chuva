import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'DevChuva';
  assunto: string = '';
  conteudo: string = '';
  isTopicoExpandido = false;
  isFormularioVisivel = false;
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
    // Redirecionar para a rota /form
    this.router.navigate(['/form']);
  }
  mostrarMensagemDeSucesso = false;

  enviarFormulario() {
    const sucessoSimulado = true;
    console.log('Form submit clicked');

    if (sucessoSimulado) {
      this.mostrarMensagemDeSucesso = true;

      const card1 = document.getElementById('card-existente');
      const card2 = document.getElementById('card-2');

      if (card1 && card2) {
        card1.style.display = 'none';
        card2.style.display = 'block';
      }
    } else {
      this.mensagemDeSucesso = 'Erro ao enviar o formulário. Tente novamente mais tarde.';
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
