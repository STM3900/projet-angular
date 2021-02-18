import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaperServiceService } from '../services/paper-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  public publicPaper;
  public id;
  public idEdit: false;

  constructor(
    private _papiers: PaperServiceService,
    private _router: Router,
    private _r: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._r.paramMap.subscribe((v) => {
      this.id = Number(v.get('id'));
      this.publicPaper = this._papiers.getSinglePaper(this.id - 1);
    });
  }
}
