import { Component, OnInit } from '@angular/core';
import { CelebrityService } from './services/celebrity.service';
import { Celebrity } from 'src/global/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  celebrities: Celebrity[] = [];
  constructor(private celebrityService: CelebrityService) {}

  ngOnInit() {
    this.celebrities = this.celebrityService.celebrities;
  }
}
