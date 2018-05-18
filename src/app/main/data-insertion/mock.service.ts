import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  vContinua = {
    title: 'Exercicio 1',
    content: [
      {group: '20', qtd: 1},
      {group: '25', qtd: 1},
      {group: '28', qtd: 1},
      {group: '31', qtd: 1},
      {group: '32', qtd: 3},
      {group: '35', qtd: 1},
      {group: '37', qtd: 1},
      {group: '42', qtd: 2},
      {group: '46', qtd: 1},
      {group: '47', qtd: 1},
      {group: '48', qtd: 1},
      {group: '50', qtd: 1},
      {group: '52', qtd: 1},
      {group: '54', qtd: 1},
      {group: '55', qtd: 1},
      {group: '57', qtd: 1},
      {group: '60', qtd: 1}
    ]
  };

  vContinua2 = {
    title: 'Exercicio 1',
    content: [
      {group: '590', qtd: 1},
      {group: '430', qtd: 1},
      {group: '430', qtd: 1},
      {group: '320', qtd: 1},
      {group: '320', qtd: 1},
      {group: '500', qtd: 1},
      {group: '310', qtd: 1},
      {group: '390', qtd: 1},
      {group: '390', qtd: 1},
      {group: '450', qtd: 1},
      {group: '570', qtd: 1},
      {group: '570', qtd: 1},
      {group: '580', qtd: 1},
      {group: '410', qtd: 1},
      {group: '380', qtd: 1},
      {group: '380', qtd: 1},
      {group: '510', qtd: 1},
      {group: '510', qtd: 1},
      {group: '335', qtd: 1},
      {group: '515', qtd: 1},
      {group: '600', qtd: 1},
      {group: '300', qtd: 1},
      {group: '437', qtd: 1},
      {group: '578', qtd: 1},
      {group: '572', qtd: 1},
      {group: '480', qtd: 1},
      {group: '462', qtd: 1},
      {group: '413', qtd: 1},
      {group: '457', qtd: 1},
      {group: '530', qtd: 1},
    ]
  };

  quali = {
    title: 'Exercicio 3',
    content: [
      {group: 'Bom', qtd: 5},
      {group: 'Regular', qtd: 5},
      {group: 'Ruim', qtd: 0},
      {group: 'Muito bom', qtd: 5},
    ]
  }

  constructor() {
  }
}
