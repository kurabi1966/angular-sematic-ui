import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [
    {
      image: 'https://images.freeimages.com/images/large-previews/157/young-and-old-1399297.jpg',
      header: 'Free Young and old Stock Photo',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
      additionalDetails: 'look like readable English. Many desktop'
    },
    {
      image: 'https://media.istockphoto.com/photos/grandfather-and-grandson-in-garden-picture-id971388782',
      header: 'Grandfather and grandson in garden stock photo',
      description: 'text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes',
      additionalDetails: 'look like readable English. Many desktop'
    },
  ]
  stats = [{label:'Revenue', value: 150000},{label:'# of Hits', value: 35},{label:'Views', value: 3150},{label:'Members', value: 30}]

}
