import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor(fb: FormBuilder) {

  }

  ngOnInit(): void {
  }
}
