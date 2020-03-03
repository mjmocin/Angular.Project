import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  CobrancaC: boolean = false;

  clienteForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  formCliente() {
    this.clienteForm = this.formBuilder.group({
      codigo: ['9719457'],
      estrangeiro: [false, Validators.requiredTrue],
      cpfCnpj: ['', Validators.required],
      situacao: [''],
      pesquisado: [''],
      tipos: ['', Validators.required],
      razao: ['', Validators.required],
      nomeFantasma: ['', Validators.required],
      cep: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required, Validators.maxLength(2)],
      pais: [''],
      cobranca: [false],
      nascimento: [''],
      incMunicipal: [''],
      incEstadual: [''],
      rg: [''],
      Segmentos: ['', Validators.required],
      site: ['']
    })
  }


}
