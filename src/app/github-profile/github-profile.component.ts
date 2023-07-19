import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
  ngOnInit() {
    //simpler way to get access to route parameters with the 'snapshot'. here the paramMap is an object and not an observable like below (code commented out)
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // this.route.paramMap.subscribe((params) => {
    // let id = +(params?.get('id') as string);
    //the + is to convert the string (id), which is the allowed value, into a number
    // the ? and 'as string' was added by AI as a solution bc the code on mosh video did not work for me
    // console.log(id);
    // });
  }
}
