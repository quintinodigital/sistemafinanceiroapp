import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() { }

  public onAvancarMes() {
    console.log("onProximoMes...");    
  }

  public onRetornarMes() {
    console.log("onRetornarMes...");    
  }

}
