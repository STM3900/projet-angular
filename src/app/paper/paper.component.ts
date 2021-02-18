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

  nom = 'Théo';
  tooAdd = false;

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
    newPaper.id = this._papiers.getPapers().length + 1;
    this.selectedPaper = newPaper;
    this.tooAdd = true;
  }

  onValidate() {
    if (this.tooAdd) {
      this._papiers.addPaper(this.selectedPaper);
      this.selectedPaper = null;
    } else {
    }
  }
}
