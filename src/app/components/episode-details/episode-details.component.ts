import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationServiceService } from '../../services/navigation-service.service'; 
import { EpisodeService } from './EpisodeService'; 

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit, OnChanges {

  @Input() episodeName: string; 
  currentEpisode: any; 

  constructor(private nav: NavigationServiceService, private episodeService: EpisodeService) {

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.episodeName && !changes.episodeName.firstChange) {
      this.getEpisodeDetails();
    }
  }

  private getEpisodeDetails(): void {
    const that = this;

    this.episodeService
      .getEpisodeDetails(this.episodeName)
      .subscribe({
        next(value) {
          that.currentEpisode = value;
        },
        error(err) {
          console.error(err);
          that.currentEpisode = null;
        },
      });
  }

}
