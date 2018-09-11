import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 
import {DesafioService} from '../../services/desafio.service';
 
import {Desafio} from '../../services/desafio';
 
import {Response} from '../../services/response';
 
 
@Component({
    selector: 'app-cadastro-desafio',
    templateUrl: './cadastro.component.html',
    styleUrls:["./cadastro.component.css"]
  })
  export class CadastroComponent implements OnInit {
 
    private titulo:string;
    private desafio:Desafio = new Desafio();
 
    constructor(private desafioSErvice: DesafioService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
 
      this.activatedRoute.params.subscribe(parametro=>{
 
        if(parametro["codigo"] == undefined){
 
          this.titulo = "Desafio Teste Soluts";
        }
 
      });      
    }
 
    /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
    salvar():void {
 

        /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
        this.desafioSErvice.addDesafio(this.desafio).subscribe(response => {
 
           //PEGA O RESPONSE DO RETORNO DO SERVIÇO
           let res:Response = <Response>response;
 
           /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
           E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
           if(res.codigo == 1){
            alert(res.mensagem);
            this.desafio = new Desafio();
           }
           else{
             /*
             ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
             NO SERVIDOR (CODIGO = 0)*/
             alert(res.mensagem);
           }
         },
         (erro) => {   
           /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
             EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
            alert(erro);
         });
 
      
 
    }
 
  }