import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor() { }
  myArray = [1, 2, 3, 4, 5];

  ngOnInit(): void {
  }
  removeItem(index){

    this.myArray.splice(index, 1);

  }
}
