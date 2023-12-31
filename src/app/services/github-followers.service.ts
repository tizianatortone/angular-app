import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//to reuse dataservice we add extends + importation
export class GithubFollowersService extends DataService {
  constructor(http: HttpClient) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
