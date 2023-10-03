import { Injectable } from '@angular/core';
import { Celebrity } from 'src/global/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  private _currentCelebrity = {} as Celebrity;

  get currentCelebrity() {
    return this._currentCelebrity;
  }

  set currentCelebrity(value: Celebrity) {
    this._currentCelebrity = value;
  }

  get celebrities(): Celebrity[] {
    return [
      {
        name: 'Eminem',
        realName: 'Marshall Mathers',
        posts: [
          {
            platform: 'twitter',
            date: '22/04/2023',
            link: '',
            data: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Had 2 come out with <a href="https://twitter.com/50cent?ref_src=twsrc%5Etfw">@50cent</a> last night… thanks 4 the love, Detroit! FINAL LAP TOUR!!!<br><br>photo credit: Krewsade <a href="https://t.co/s4719hySRF">pic.twitter.com/s4719hySRF</a></p>&mdash; Marshall Mathers (@Eminem) <a href="https://twitter.com/Eminem/status/1703802072813224407?ref_src=twsrc%5Etfw">September 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
          },
        ],
        socials: [
          {
            name: 'twitter',
            link: 'https://twitter.com/Eminem',
          },
          {
            name: 'facebook',
            link: '',
          },
          {
            name: 'instagram',
            link: '',
          },
          {
            name: 'youtube',
            link: '',
          },
          {
            name: 'tiktok',
            link: '',
          },
        ],
        image:
          'https://i.pinimg.com/736x/6e/5a/7b/6e5a7b06343a9fb72555f92256898608--slim-shady-hot-dudes.jpg',
      },
    ];
  }
}
