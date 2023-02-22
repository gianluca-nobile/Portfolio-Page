import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  text = '';
  _fullText = `Il mio testo con un'immagine e un link: <a href="https://www.example.com" target="_blank">esempio</a>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has sur`;
  _textIndex = 0;
  _typingSpeed = 50;

  constructor() { }

  ngOnInit(): void {
    this._typeText();
  }

  _typeText() {
    if (this._textIndex < this._fullText.length) {
      this.text += this._fullText.charAt(this._textIndex);
      this._textIndex++;
      setTimeout(() => this._typeText(), this._typingSpeed);
    }
  }

}
