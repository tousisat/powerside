import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LabelService {
  labelChanged = new EventEmitter<string>();
  private labelCurrentIndex: number = 0;

  private labels: string[] = [
    "Grande Ventes D'entrepot",
    'Ce Samedi',
    'Ne ratez pas votre chance',
  ];

  constructor() {
    setInterval(() => {
      this.getNextLabel();
    }, 15000);
  }

  getNextLabel() {
    const myLabel = this.labels[this.labelCurrentIndex];
    this.labelChanged.emit(myLabel);
    this.labelCurrentIndex = (this.labelCurrentIndex + 1) % this.labels.length;
  }
}
