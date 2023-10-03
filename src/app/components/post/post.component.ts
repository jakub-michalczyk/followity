import {
  Component,
  Input,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { Post } from 'src/global/interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements AfterViewInit {
  @Input() data = {} as Post;
  @Input() profileLink? = '';
  visibleLoader = true;

  constructor(private cdr: ChangeDetectorRef) {
    // @ts-ignore
    twttr.ready((twttr) => {
      // @ts-ignore
      twttr.events.bind('rendered', (event) => {
        this.hideLoader();
      });
    });
  }

  ngAfterViewInit() {
    // @ts-ignore
    twttr.widgets.load();
  }

  hideLoader() {
    this.visibleLoader = !this.visibleLoader;
    console.log(this.visibleLoader);
    this.cdr.detectChanges();
  }
}
