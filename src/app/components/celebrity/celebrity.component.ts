import { Component, OnInit, Input } from '@angular/core';
import { CelebrityService } from 'src/app/services/celebrity.service';
import { Celebrity } from 'src/global/interfaces';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.scss'],
})
export class CelebrityComponent implements OnInit {
  @Input() data = {} as Celebrity;

  ngOnInit(): void {}

  getProfileLink(platform: string) {
    return this.data.socials.find((social) => social.name === platform)?.link;
  }
}
