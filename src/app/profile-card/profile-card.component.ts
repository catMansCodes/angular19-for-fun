import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-card',
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  userName: string = 'MR Stark';
  userAge: number = 30;
  userDescription: string = 'Java Developer at Stark Industries';
}
