export class Devise {
    code: string; // ex: usd,eur;GBP,JPY
    name:string;   //Dollar,Euro,Livre,Yen
    change:number; // dollar,1,0.9,0.8,120

    constructor(code:string=null,
        name:string=null,
        change:number=1){
       
        this.code=code;
        this.name=name;
        this.change=change;
    }
}
