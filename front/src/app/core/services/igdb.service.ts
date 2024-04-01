import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    const plataformasExcluir = [14, 34, 48, 52, 386]; //  Mac: 14, Android: 34, VR: 48, Arcade: 52, Meta Quest 2: 386

    return this.httpClient.post<Games[]>(
      'v4' + '/games',
      'fields name, summary, cover.url, platforms.name, first_release_date;' +
        ` where first_release_date >= ${
          startOfMonth.getTime() / 1000
        } & first_release_date < ${endOfMonth.getTime() / 1000}` +
        ` & platforms != [${plataformasExcluir.join(', ')}];`+     
        'limit 200; sort first_release_date asc;'
    );
  }


  getTest(selectedDate: Date): Observable<Games[]> {
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

    const plataformasExcluir = [6,14, 34, 48, 52, 386]; // Mac: 14, Android: 34, VR: 48, Arcade: 52, Meta Quest 2: 386

    return this.httpClient.post<Games[]>(
      'v4' + '/games',
      'fields name, summary, cover.url, platforms.name, release_dates.date;' +
        ` where id = 166824; `+  
        'limit 50; sort release_dates.date asc;'
    );
  }
}
