import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asg2',
  templateUrl: './asg2.component.html',
  styleUrls: ['./asg2.component.css']
})
export class Asg2Component implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit() {
  }
  resetBtn() {
    this.userName = '';
  }

  // checkUserName(){
  //
  // }

}
