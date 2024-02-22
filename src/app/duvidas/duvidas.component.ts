import { Component } from '@angular/core';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrl: './duvidas.component.scss',
})
export class DuvidasComponent {
  ativar: boolean = true;

  ativa: any = {
    first: false,
    second: false,
    third: false,
    fourth: false,
  };

  ativarCaixa(i: number) {
    if (this.ativa[i] == true) {
      this.ativa[i] = true;
    } else {
      this.ativa[i] = false;
    }
  }
}
