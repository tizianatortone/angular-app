import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const API_URL = new InjectionToken<string>('apiUrl');

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get(this.apiUrl).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }
  create(resource: Record<string, any>) {
    return this.http.post(this.apiUrl, JSON.stringify(resource)).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  update(resource: any) {
    return this.http.put(this.apiUrl, JSON.stringify(resource)).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  delete(
    id: any //here all we need is the id of a post
  ) {
    // also we need to reference a specific post here & no JSON bc by convention delete request don't have a body

    return this.http.delete(this.apiUrl + '/' + id).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput(error.json()));

    if (error.status === 404) return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
