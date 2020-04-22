import { Component, OnInit, OnDestroy } from '@angular/core';
import { LabelService } from './label.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit, OnDestroy {
  label: string;

  constructor(private labelService: LabelService) {}

  ngOnInit(): void {
    this.labelService.labelChanged.subscribe(
      (labelText) => (this.label = labelText)
    );
    //trigger initial label
    this.labelService.getNextLabel();
  }

  ngOnDestroy(): void {
    //not necessary because angular already do that for us
    this.labelService.labelChanged.unsubscribe();
  }
}
