import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-counter-app',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  initialCount: number = 0;

  increseCount() {
    this.initialCount += 1;
  }
  descreaseCount() {
    if (this.initialCount > 0) {
      this.initialCount -= 1;
    }
  }

  resetCount() {
    this.initialCount = 0;
  }
}
