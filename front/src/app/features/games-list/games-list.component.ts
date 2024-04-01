import { Component, signal } from '@angular/core';
import { IgdbService } from '../../core/services/igdb.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { toObservable } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss',
})
export class GamesListComponent {
  currentMonth = signal(new Date());
  isLoading = signal(true);

  gamesList$ = toObservable(this.currentMonth).pipe(
    tap(() => this.isLoading.set(true)),
    switchMap((selectedDate) => this.igdbService.getGames(selectedDate)),
    catchError(() => {
      this.isLoading.set(false); //
      return of([]); //
    }),
    tap(() => this.isLoading.set(false))
  );

  constructor(private igdbService: IgdbService) {}

  ngOnInit(): void {}

  changeMonth(offset: number): void {
    const newDate = new Date(
      this.currentMonth().getFullYear(),
      this.currentMonth().getMonth() + offset
    );
    this.currentMonth.set(newDate);
  }
}
