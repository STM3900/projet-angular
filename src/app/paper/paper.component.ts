import { Component, OnInit } from '@angular/core';
import { Paper } from '../Model/paper';
import { PaperServiceService } from '../services/paper-service.service';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
})
export class PaperComponent implements OnInit {
  public publicPaper;

  constructor(private _papiers: PaperServiceService) {
    this.publicPaper = _papiers.getPapers();
  }

  public tooAdd = false;
  public sectionTitle = "Détail d'un produit";
  public verifForm = true;

  ngOnInit(): void {}

  public selectedPaper;

  onSelect(papier: Paper) {
    this.sectionTitle = "Détail d'un produit";
    if (!this.selectedPaper) {
      this.selectedPaper = papier;
      this.tooAdd = false;
    }
  }

  onDeselect() {
    this.selectedPaper = null;
  }

  addPaper() {
    this.sectionTitle = 'Ajouter un produit';
    let newPaper = new Paper();
    newPaper.id = this._papiers.getPapers().length + 1;
    this.selectedPaper = newPaper;
    this.tooAdd = true;
  }

  onValidate() {
    for (const i in this.selectedPaper) {
      if (this.selectedPaper[i] == '') {
        this.verifForm = false;
      }
    }
    if (this.verifForm) {
      if (this.tooAdd) {
        this._papiers.addPaper(this.selectedPaper);
        this.selectedPaper = null;
      }
    } else {
      this.verifForm = false;
      setTimeout(() => {
        this.verifForm = true;
      }, 300);
    }
  }
}
