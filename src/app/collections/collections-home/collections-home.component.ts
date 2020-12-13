import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name: 'Ahmad', age: 24, address: 'United Kingdom'},
    {name: 'Abdulrahman', age: 22, address: 'Poland'},
    {name: 'Muhanned', age: 17, address: 'United Arab of Emirates'},
    {name: 'Ammar', age: 54, address: 'United Arab of Emirates'},
    {name: 'Lina', age: 45, address: 'United Arab of Emirates'},
  ]

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'address', label: 'Address'}
  ]

  tabs = ['Biography', 'Companies', 'Partners', 'Services']
  tabsAttaches = [
    'This is the biography tab content',
    'This is the companies tab content',
    'This is the partners tab content',
    'This is the services tab content'
  ]
  activeTab = 0
  isActiveTab(index: number){
    if(this.activeTab === index){
      return "active_tab"
    }
    
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
