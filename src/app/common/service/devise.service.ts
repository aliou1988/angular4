import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of, from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {


  constructor(private http: HttpClient) { }


// pour version temporaire  avant apell http vers api-rest
private tabDevise: Devise[]=[
new Devise("USD","Dollar",1),
new Devise("EUR","Euro",0.9),
new Devise("GBP","Livre",0.8),
new Devise("JPY","Yen",120)
 // 0.9 euro pour 1 dollar
];

public rechercherDevises():Observable< Devise[]>{
  let url= "./devise-api/public/devise";

  return  this.http.get <Devise[]>(url);
}

public convertir(montant:number,
  codeMonnaieSource: string,
  codeMonnaieCible:string): Observable <number> {
    let url=` ./devise-api/public/convert`+
             ` ?source =${codeMonnaieSource}&target=${codeMonnaieCible}&amount=${montant}`;
             return this.http.get<object>(url)
             .pipe(
               map( (responseObject)=> { return responseObject["result"];})
             );
 // LE WEB service Rest retourne un resultat de type 
 //{"source :EUR","tartget":"GBP" amount 300,resultat":219.78021978021977}}

//     let res=1;
//     // code temporaire (sans http)
//     let deviseCible= null;
//     let deviseSource=null;
//     for(let d of this.tabDevise){
//       if(d.code==codeMonnaieSource)
//           deviseSource=d;
//           if(d.code==codeMonnaieCible)
//           deviseCible;
//     }
//     res= montant*deviseCible.change/deviseSource.change;
//     return of(res);
//   }

// }
             }       
            }