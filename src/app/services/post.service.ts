import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//I want this class to inherit all the code I worte in data.service.ts so we add extends to de class
export class PostService extends DataService {
  //declared url here to avoid duplicating the url in all methods/functions below. why private? bc this is only for the implementation detail of this class. No where outside of this class we want this field to be visible.

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
