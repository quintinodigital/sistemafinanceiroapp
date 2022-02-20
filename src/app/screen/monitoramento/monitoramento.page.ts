import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.page.html',
  styleUrls: ['./monitoramento.page.scss'],
})
export class MonitoramentoPage implements OnInit {

  constructor() { }

  ngOnInit() { }

  public onAvancarMes() {
    console.log("onProximoMes...");    
  }

  public onRetornarMes() {
    console.log("onRetornarMes...");    
  }

}
