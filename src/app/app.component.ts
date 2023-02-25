import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'gianlucaPage';

  loading = false;
  tab = '';
  mode = 'dark';

  constructor(private location: Location, private route: Router) {}


  ngOnInit(): void {
    this.loading = true;
    this.getSelectedTab();
  }

  getSelectedTab(){
    if (this.location.path().includes('about')){
      this.tab = 'about';
    }else if (this.location.path().includes('skill')){
      this.tab = 'skill';
    }else {
      this.tab = 'home'
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
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
    this.route.navigate([tab === 'home'? '' : '/'+tab])
  }

}
