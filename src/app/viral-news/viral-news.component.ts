import { Component, OnInit } from '@angular/core';
import { ViralService } from './viral.service';
@Component({
  selector: 'app-viral-news',
  templateUrl: './viral-news.component.html',
  styleUrls: ['./viral-news.component.css']
})
export class ViralNewsComponent implements OnInit {
  news={};
  tags=['Business','Technology','Sport','Art','Lifestyle','Photography','Education','Social'];
  constructor(private _viralService:ViralService) { 
    
  }

  ngOnInit() {
    this._viralService.getViral().subscribe((viralData)=>this.news=viralData);
  }
  loadTags(value){
    this._viralService.getTagedNews(value).subscribe((viralData)=>this.news=viralData);
  }
}
