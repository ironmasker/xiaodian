// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../../service/github-followers.service';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];
  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap, this.route.queryParamMap
    ])
    .switchMap(
      combined => {
        console.log(combined[1].get('id'));
        console.log(combined[0]);
  
      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers);
  }

}
