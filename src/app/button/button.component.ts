import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: any;
  @Input() textcolor: any;
  @Input() bgcolor: any;
  @Input() borderradius: any;

  isDisabled = false;
  constructor() {}

  ngOnInit() {}

}