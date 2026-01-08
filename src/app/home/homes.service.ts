import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomesService {

  constructor() { }
  private homes = [
    {
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      image: 'assets/images/home1.jpg'
    },
    {
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      image: 'assets/images/home2.jpg'
    },
    {
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      image: 'assets/images/home3.jpg'
    },
    {
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      image: 'assets/images/home4.jpg'
    },
    {
  name: 'Hopeful Apartment Group',
  city: 'Oakland',
  state: 'CA',
  image: 'assets/images/home5.jpg'
},
{
  name: 'Seriously Safe Towns',
  city: 'Oakland',
  state: 'CA',
  image: 'assets/images/home6.jpg'
},
{
  name: 'Happy Homes Group',
  city: 'Gary',
  state: 'IN',
  image: 'assets/images/home7.jpg'
},
{
  name: 'Capital Safe Towns',
  city: 'Portland',
  state: 'OR',
  image: 'assets/images/home8.jpg'
},
{
  name: 'Bright Future Housing',
  city: 'San Jose',
  state: 'CA',
  image: 'assets/images/home9.jpg'
},
{
  name: 'New Beginnings Housing',
  city: 'Seattle',
  state: 'WA',
  image: 'assets/images/home10.jpg'
},
{
  name: 'Unity Living Spaces',
  city: 'Austin',
  state: 'TX',
  image: 'assets/images/home11.jpg'
}
];

  getHomes() {
    return this.homes;
  }
}
