import { Component, OnInit, Input } from '@angular/core';
import { CelebrityService } from 'src/app/services/celebrity.service';
import { Celebrity } from 'src/global/interfaces';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.scss'],
})
export class CelebrityComponent implements OnInit {
  data = {} as Celebrity;
  constructor(private celebrityService: CelebrityService) {}

  ngOnInit(): void {
    this.data = this.celebrityService.currentCelebrity;
    Object.keys(this.celebrityService.currentCelebrity).length !== 0
      ? window.localStorage.setItem('celebrityData', JSON.stringify(this.data))
      : (this.data = JSON.parse(window.localStorage.getItem('celebrityData')!));
  }

  getProfileLink(platform: string) {
    return this.data.socials.find((social) => social.name === platform)?.link;
  }
}
