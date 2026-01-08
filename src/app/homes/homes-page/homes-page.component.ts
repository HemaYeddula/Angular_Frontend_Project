import { Component, OnInit } from '@angular/core';
import { HomesService } from 'src/app/home/homes.service';

@Component({
  selector: 'app-homes-page',
  templateUrl: './homes-page.component.html',
  styleUrls: ['./homes-page.component.css']
})
export class HomesPageComponent implements OnInit {

  homes: any[] = [];
  filteredHomes: any[] = [];

  constructor(private homesService: HomesService) {}

  ngOnInit() {
    this.homes = this.homesService.getHomes();
    this.filteredHomes = this.homes;
  }

  filterHomes(city: string) {
    if (!city) {
      this.filteredHomes = this.homes;
      return;
    }

    this.filteredHomes = this.homes.filter(h =>
      h.city.toLowerCase().includes(city.toLowerCase())
    );
  }

}
