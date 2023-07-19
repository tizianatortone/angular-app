import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers!: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) {}

  ngOnInit() {
    //subscribing to multiple observables (paramMap & queryparamMap). We don't user the word observable here casue there has been an update
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          const id = combined[0].get('id');
          const page = combined[1].get('page');
          return this.service.getAll();
        })
      )
      //no longer need this subscribe
      // .subscribe((followers) => (this.followers = followers));

      .subscribe((followers) => (this.followers = followers));
    //NO LONGER NEEDED since we subscribed to them above
    //this.route.paramMap.subscribe((params) => {});
    //this.route.queryParamMap.subscribe((params) => {});

    // let page = this.route.snapshot.queryParamMap.get('page');
  }
}
