import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Input() mode: string = 'dark'

  text = '';
  fullText = `Ciao a tutti! Sono Gianluca,<br> un software developer. Attualmente lavoro presso <a href="https://negg.group/" target="_blank">Negg</a>. Ho una grande passione per la programmazione e ho esperienza in HTML, CSS, Bootstrap, Javascript e Angular. Sono costantemente alla ricerca di nuove sfide e opportunità per migliorare le mie competenze.

Ma non sono solo un programmatore! Quando non sono davanti al computer, mi troverai a fare kite surf o snowboard. Amo mettermi alla prova e superare i miei limiti, sia in campo lavorativo che personale.`;
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
