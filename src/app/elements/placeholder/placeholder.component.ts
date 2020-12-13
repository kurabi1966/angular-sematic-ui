import { Component, OnInit, Input } from '@angular/core';
import { listeners } from 'process';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true;
  @Input() lines = 5;
  
  constructor() { }

  ngOnInit(): void {
  }
}
