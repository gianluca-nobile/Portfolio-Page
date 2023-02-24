import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Input() mode: string = 'dark'

  text = '';
  fullText = `<  Hi everyone! I'm Gianluca, a software developer.<br> Currently, I work at <a href="https://negg.group/" target="_blank">Negg</a>. I have a great passion for programming and have experience in HTML, CSS, Bootstrap, Javascript, and Angular. I am constantly looking for new challenges and opportunities to improve my skills.

But I am not just a software developer! When I am not in front of the computer, you will find me kite surfing or snowboarding. I love to challenge myself and push my limits, both professionally and personally.  />`;
  textIndex = 0;
  typingSpeed = 50;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.typeText();
    }, 500);
  }

  typeText() {
    if (this.textIndex < this.fullText.length) {
      this.text += this.fullText.charAt(this.textIndex);
      this.textIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }

}
