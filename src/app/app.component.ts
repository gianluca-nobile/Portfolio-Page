import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'gianlucaPage';

  loading = false;
  tab = 'home';
  mode = 'dark';


  ngOnInit(): void {
      this.loading = true
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 500)
  }

  switchMode() {
    const html = document.documentElement;
      html.classList.toggle('dark');
    if (this.mode === 'light'){
      this.mode = 'dark';
    }else {
      this.mode = 'light';
    }
  }
  switchTab(tab: string){
    this.tab = tab;
  }

}
