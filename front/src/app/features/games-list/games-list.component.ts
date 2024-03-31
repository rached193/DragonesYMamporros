import { Component } from '@angular/core';
import { IgdbService } from '../../core/services/igdb.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.scss',
})
export class GamesListComponent {
  gamesList$ = this.igdbService.getGames(new Date());

  constructor(private igdbService: IgdbService) {}

  ngOnInit(): void {}
}
