import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

 public ht: number;
 public ttc:number;
 public taux: number=20;
 public tva:number;
 
 public calculer(){

  this.ttc=(this.ht*this.tva); 
  this.ttc=Number(this.ht)+this.tva;

 }

}
