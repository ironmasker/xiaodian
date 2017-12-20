import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './component/stars/stars.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  body="Body";
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  }

  onFavoriteChanged(args: FavoriteChangedEventArgs) {
    console.log("favorite changed", args.newValue);
  }

  onLikeChanged() {
    console.log("app like changed");
    this.tweet.isLiked = !this.tweet.isLiked;
    this.tweet.likesCount += this.tweet.isLiked ? 1 : -1;
  }
}
