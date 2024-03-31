import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGDN_URL } from '../config/constants';
import { Observable } from 'rxjs';
import { Games } from '../../shared/models/games';

@Injectable({
  providedIn: 'root',
})
export class IgdbService {
  constructor(private httpClient: HttpClient) {}

  getGames(selectedDate: Date): Observable<Games[]> {
    const startOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );


    return this.httpClient.post<Games[]>(
      'v4' + '/games',
      'fields name, summary, cover.url, platforms, first_release_date;' +
        ` where first_release_date >= ${
          startOfMonth.getTime() / 1000
        } & first_release_date < ${endOfMonth.getTime() / 1000};` +
        'limit 50; sort first_release_date asc;'
    );
  }
}
