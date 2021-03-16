import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../Services/hotel.service';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  public hoteles: any[] = [];
  constructor(private hotelApi: HotelService) { }

  ngOnInit(): void {
    this.hotelApi.getHotele().subscribe((res: any) => {
      console.log(res);
      this.hoteles = res;
      })
  }
  
addHotel(){

}
}
