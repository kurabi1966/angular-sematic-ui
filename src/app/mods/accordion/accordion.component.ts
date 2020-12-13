import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  currentActive = -1
  isActive(index: number){
    return this.currentActive == index ? 'active': ''
  }

  onClick(index: number){
    index === this.currentActive ? this.currentActive = -1 : this.currentActive = index
  }

  @Input() data = []
  constructor() { }

  ngOnInit(): void {
  }

}
