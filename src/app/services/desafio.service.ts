import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
 
import {Desafio} from '../services/desafio';
import {ConfigService} from './config.service';
 
@Injectable()
export class DesafioService {
 
    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http,
                private configService: ConfigService) { 
 
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService();
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
 
    /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
    getDesafios(){        
        return this.http.get(this.baseUrlService).map(res => res.json());
    }
 
    /**ADICIONA UMA NOVA PESSOA */
    addDesafio(desafio: Desafio){
 
        return this.http.post(this.baseUrlService, JSON.stringify(desafio),this.options)
        .map(res => res.json());
    }
   
 
}