import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { FormGroup, FormBuilder } from '@angular/forms';
import { financeiro } from './financeiro.model'

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {

  financeiroForm: FormGroup;

  opcoes: SelectItem[];
  escolha: string;
  
  // faturaC: boolean = false;
  // vigiadoC: boolean = false;
  // emiteC: boolean = false;
  // analiseC: boolean = false;
  
  constructor(public formBuilder: FormBuilder) {
  
    this.opcoes = [
      {label:"Selecione Uma Opção", value:""},
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
      { label: 'C', value: 'C' },
      { label: 'D', value: 'D' },
      { label: 'E', value: 'E' }
    ];
  }
  
  
  ngOnInit(): void {
    this.formFinanceiro(new financeiro ());
  }

  formFinanceiro(financeiro: financeiro){
    this.financeiroForm = this.formBuilder.group({
      situacaoCred:[''],
      faturaC:[false],
      vigiadoC:[false],
      emiteC:[false],
      analiseC:[false],
    })
  }
}
