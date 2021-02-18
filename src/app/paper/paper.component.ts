import { Component, OnInit } from '@angular/core';
import { Paper } from '../Model/paper';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
})
export class PaperComponent implements OnInit {
  constructor() {}

  nom = 'Théo';
  tooAdd = false;
  public papiers: Paper[] = [
    {
      id: 1,
      nom: 'Canson feuille trop bien',
      texture: 'oui',
      grammage: '300g',
      couleur: 'bleu',
    },
    {
      id: 2,
      nom: 'Non',
      texture: 'oui',
      grammage: '100g',
      couleur: 'jsppp',
    },
    {
      id: 3,
      nom: 'Non',
      texture: 'oui',
      grammage: '8768452g',
      couleur: 'aaaaaaaaaaaaaaa',
    },
  ];

  ngOnInit(): void {}

  public selectedPaper;

  onSelect(papier: Paper) {
    if (!this.selectedPaper) {
      this.selectedPaper = papier;
      this.tooAdd = false;
    }
  }

  onDeselect() {
    this.selectedPaper = null;
  }

  addPaper() {
    let newPaper = new Paper();
    newPaper.id = this.papiers.length + 1;
    this.selectedPaper = newPaper;
    this.tooAdd = true;
  }

  onValidate() {
    if (this.tooAdd) {
      this.papiers.push(this.selectedPaper);
      this.selectedPaper = null;
    } else {
      //TODO tg
    }
  }
}
