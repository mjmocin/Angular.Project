import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {
  
  UF: SelectItem[];
  Pais: SelectItem[];
  UFdrop: String;
  PaisDrop: String;
  CobrancaC: boolean = false;
  EntregaC: boolean = false;


  constructor(public router: Router) {
    this.UF = [
      { label: "Selecione Uma Opção", value: ""},
      { label: 'PE', value: 'Pernambuco' },
      { label: 'SP', value: 'Sao Paulo' },
      { label: 'RJ', value: 'Rio de Janeiro' },
      { label: 'CE', value: 'Ceara' },
      { label: 'AM', value: 'Amazonia' }
    ]
    this.Pais = [
      { label: "Selecione Uma Opção", value: "" },
      { label: 'BR', value: 'Brasil' },
      { label: 'FR', value: 'Franca' },
      { label: 'US', value: 'EUA' },
      { label: 'AR', value: 'Argentina' }
    ]
  }

  ngOnInit(): void {
  }

  cliente() {
    //this.router.navigate(['/home/cliente']);
  }
  endereco() {
    this.router.navigate([{ outlets: { HomeComponent: 'endereco' } }]);
  }
  financeiro() {
    this.router.navigate([{ outlets: { HomeComponent: 'financeiro' } }]);
  }

}
