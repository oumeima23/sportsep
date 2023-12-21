import { Component, OnInit } from '@angular/core';
import { ActionSequence } from 'protractor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  actualDate : any;
title : string="DAchboard ADmin"
  constructor() { }

  ngOnInit() {
    this.actualDate =new Date
  }

}
