import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Input() mode: string = 'dark'

  text = '';
  fullText = `Il mio testo con un'immagine e un link: <a href="https://www.example.com" target="_blank">esempio</a>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur`;
  textIndex = 0;
  typingSpeed = 50;

  constructor() { }

  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    if (this.textIndex < this.fullText.length) {
      this.text += this.fullText.charAt(this.textIndex);
      this.textIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }

}
