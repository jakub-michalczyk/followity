import { Component, OnInit } from '@angular/core';
import { CelebrityStory } from 'src/global/interfaces';
import Swiper from 'swiper';

@Component({
  selector: 'app-celebrity-list',
  templateUrl: './celebrity-list.component.html',
  styleUrls: ['./celebrity-list.component.scss'],
})
export class CelebrityListComponent implements OnInit {
  swiper = {} as Swiper;

  celebrities: CelebrityStory[] = [
    {
      viewed: false,
      data: {
        name: 'Eminem',
        realName: 'Marshall Mathers',
        socials: [],
        image:
          'https://i.pinimg.com/736x/6e/5a/7b/6e5a7b06343a9fb72555f92256898608--slim-shady-hot-dudes.jpg',
      },
    },
  ];

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      spaceBetween: 20,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      slidesPerView: 4,
    });
  }
}
