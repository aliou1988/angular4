import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  montant : number;
  codeMonnaieSource : string = "EUR";
  codeMonnaieCible : string = "USD";
  resultat : number;
  erroMsg: string=null;
  listeDevises : Devise[]; //ou bien : Array<Devise> ;

  calculerConversion(){
  this.deviseService.convertir(this.montant,this.codeMonnaieSource,this.codeMonnaieCible)
  
  .subscribe(
           (montantconverti: number) => { this.resultat=montantconverti;},
           (err) => {console.log(err); alert(err);}
  );

  }

  constructor(private deviseService : DeviseService) {

    deviseService.rechercherDevises()
                 .subscribe(
                   (devises:Devise[])=> { this.listeDevises= devises;},
                     
                    (err) => {console.log(err);}
                 ); 
    }

    //this.deviseService est un attribut de la classe courante (typescript)
    //comme ConversionComponent est préfixé par @Component, le paramètre deviseService
    //est automatiquement initialisé par angular (injection de dépendance) .
  //   this.listeDevises = deviseService.rechercherDevise();
  //  }

  ngOnInit() {

  }
}