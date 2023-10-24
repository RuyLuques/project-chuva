import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardedit',
  templateUrl: './cardedit.component.html',
  styleUrls: ['./cardedit.component.scss']
})
export class CardEditComponent {
  editing: boolean = true;
  saved: boolean = false;
  editedTitle: string = '';
  editedContent: string = '';

  editTopic() {
    this.editing = true;
  }

  saveEditedTopic() {
    this.saved = true;
    setTimeout(() => {
      this.saved = false;
    }, 5000);
  }

  constructor(private router: Router) { }

  redirecionarParaPadrao() {
    this.router.navigate(['/']);
  }

  exibirFormulario() {
    this.router.navigate(['/form']);
  }
}
