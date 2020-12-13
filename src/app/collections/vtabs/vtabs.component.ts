import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vtabs',
  templateUrl: './vtabs.component.html',
  styleUrls: ['./vtabs.component.css']
})
export class VTabsComponent implements OnInit {
  @Input() tabs = []
  @Input() tabsAttached = []
  activeTab = 0
  activate(index: number){
    this.activeTab = index
  }

  constructor() { }

  ngOnInit(): void {
  }

}
