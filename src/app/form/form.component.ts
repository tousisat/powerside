import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor() {}

  @ViewChild('myform', { static: false }) myForm: NgForm;
  @Output('onSubmit') submit = new EventEmitter<{}>();

  status = ['Present', 'Absent', 'Maybe'];
  genders = ['male', 'female'];

  ngOnInit(): void {}

  onSubmit() {
    this.submit.emit(this.myForm.value);
    this.myForm.reset({ status: this.status[0], gender: this.genders[0] });
  }
}
