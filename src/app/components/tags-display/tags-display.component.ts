import {Component, OnInit} from '@angular/core';
import {Keyword} from "../../models/Keyword";
import {KeywordServiceService} from "../../services/keyword-service.service";

@Component({
  selector: 'app-tags-display',
  templateUrl: './tags-display.component.html',
  styleUrls: ['./tags-display.component.css']
})
export class TagsDisplayComponent implements OnInit{
  keywords:Keyword[] = [];

  constructor(private keywordservice:KeywordServiceService) {
  }

  ngOnInit() {
    this.keywordservice.getAllKeywords().subscribe(data =>{
      this.keywords = data
    })
  }

}
