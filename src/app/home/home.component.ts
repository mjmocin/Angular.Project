import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //providers: [AuthGuardService]
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(public router: Router) {}

  cliente() {
    this.router.navigateByUrl('/home/cliente');
  }
  endereco() {
    this.router.navigate([{ outlets: { HomeComponent: 'endereco' }}]);
  }
  financeiro() {
    this.router.navigate([{ outlets: { HomeComponent: 'financeiro' } }]);
  }

}
