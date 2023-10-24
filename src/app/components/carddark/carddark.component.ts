import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-carddark',
  templateUrl: './carddark.component.html',
  styleUrls: ['./carddark.component.scss']
})
export class CardDarkComponent {
  constructor(private router: Router) {}

  redirectToEditTopic() {
    this.router.navigate(['/formedit']);
  }
}
