import { Component } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  toggleNovoCard(event: any) {
    const container = event.currentTarget;
    const novoCard = container.querySelector('.container-content-card-none');

    if (novoCard) {
      if (novoCard.style.display === 'none' || novoCard.style.display === '') {
        novoCard.style.display = 'block';
      } else {
        novoCard.style.display = 'none';
      }
    }
  }

}
