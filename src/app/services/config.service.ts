export class ConfigService {
 
    private urlService:string;
 
    constructor(){
 
        this.urlService = 'http://localhost:8080/desafio/';
    }
 
    getUrlService(): string {
 
        return this.urlService;
    }
 
}