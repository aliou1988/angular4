import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() // modifiable par le parent via < app-header[titre]="attributduParent"></ app-header>
         //app-header[titre]="valeurFixe"></ app-header>
        //app-header[titre]="valeur FIXE"></ app-header>

  titre="my-default-header"; // valeur par defaut (pouvant changer)

  constructor() { }

  ngOnInit() {
  }

}
