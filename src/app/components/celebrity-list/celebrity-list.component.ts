import { Component, OnInit } from '@angular/core';
import { CelebrityService } from 'src/app/services/celebrity.service';
import { CelebrityStory } from 'src/global/interfaces';
import Swiper from 'swiper';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit {
  swiper = {} as Swiper;

  constructor(private celebrityService: CelebrityService) {}

  celebrities: CelebrityStory[] = [];

  ngOnInit(): void {
    this.celebrityService.celebrities.forEach((celebrity) => {
      this.celebrities.push({
        viewed: false,
        data: celebrity,
      });
    });

    this.swiper = new Swiper('.swiper-container', {
      spaceBetween: 20,
      slidesPerView: 4,
    });
  }
}
