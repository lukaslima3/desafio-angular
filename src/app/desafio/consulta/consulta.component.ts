import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
 
 
import {Desafio} from '../../services/desafio';
 
import {Response} from '../../services/response';
import { DesafioService } from '../../services/desafio.service';
 
@Component({
    selector: 'app-consulta-desafio',
    templateUrl: './consulta.component.html',
    styleUrls:["./consulta.component.css"]
  })
  export class ConsultaComponent implements OnInit {
 
    private desafios: Desafio[] = new Array();
    private titulo:string;
 
    constructor(private desafioService: DesafioService,
                private router: Router){}
 
    ngOnInit() {
 
      /*SETA O TÍTULO */
      this.titulo = "Registros Cadastrados";
 
      /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
      console.log(this.desafioService.getDesafios())
      this.desafioService.getDesafios().subscribe(res => this.desafios = res);
    } 
  }