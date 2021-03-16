import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Hotel } from '../models/hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  selectedHotel: Hotel = new Hotel;

  constructor(private http:HttpClient) { }

  getHotele() {
    return this.http.get('http://localhost:3000/api/hoteles');
  }
}
