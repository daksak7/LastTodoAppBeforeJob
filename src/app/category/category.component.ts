import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title="Kategoriler"
  categories : Category[] =[
    {id:1,name:"Bilgisayar"},
    {id:2,name:"Televizyon"},
    {id:3,name:"Klima"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
