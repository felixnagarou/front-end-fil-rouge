import {Component, OnInit} from '@angular/core';
import {Keyword} from "../../models/Keyword";
import {KeywordServiceService} from "../../services/keyword-service.service";
import {Category} from "../../models/Category";
import {CategoryServiceService} from "../../services/category-service.service";

@Component({
  selector: 'app-categories-display',
  templateUrl: './categories-display.component.html',
  styleUrls: ['./categories-display.component.css']
})
export class CategoriesDisplayComponent implements OnInit {
  categories:Category[] = [];

  constructor(private categoryServiceService:CategoryServiceService) {
  }

  ngOnInit() {
    this.categoryServiceService.getAllCategories().subscribe(data =>{
      this.categories = data
    })
  }

}
