import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  
  city = '';

  @Output() searchCity = new EventEmitter<string>();

  onSearch() {
    this.searchCity.emit(this.city);
  }
}
