import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gianlucaPage';

  mode = 'light'

  switchMode() {
    const html = document.documentElement;
      html.classList.toggle('dark');

    if (this.mode === 'light'){
      this.mode = 'dark';
    }else {
      this.mode = 'light';
    }

  }
}
