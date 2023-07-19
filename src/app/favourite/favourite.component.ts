import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent {
  @Input() isFavourite!: boolean;
  @Output() favouriteChange = new EventEmitter();

  onClick() {
    this.isFavourite = !this.isFavourite;
    this.favouriteChange.emit({ newValue: this.isFavourite });
  }
}

export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
