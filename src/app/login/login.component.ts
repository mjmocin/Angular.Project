import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: String;
  pass: String;
  chave: Boolean;
  result: String;

  constructor(public router:Router) { 

  }

  ngOnInit() {
  }

  login(){
    if(this.user=="mjmo"){
      if(this.pass=="12345"){
        // this.chave = true;
        localStorage.setItem('chave', JSON.stringify(true));
        this.router.navigateByUrl('/home');
      }else{
        this.result="Usuario Invalido";
      }
    }else{
      this.result="Senha Invalida";
    }
    return this.result;
  }

}
