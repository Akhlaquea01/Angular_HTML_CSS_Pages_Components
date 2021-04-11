import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clockui',
  templateUrl: './clockui.component.html',
  styleUrls: ['./clockui.component.css']
})
export class ClockuiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   hour = document.getElementById("hour");
   minute = document.getElementById("minute");
   seconds = document.getElementById("seconds");

  set_clock = setInterval(function clock(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();

      var calc_hr = (hr * 30) + (min / 2);
      var calc_min = (min * 6) + (sec / 10);
      var calc_sec = sec*6;

      this.hour.style.transform = 'rotate(' + calc_hr + "deg)";
      this.minute.style.transform = 'rotate(' + calc_min + 'deg)';
      this.seconds.style.transform = 'rotate(' + calc_sec + 'deg)';
  }, 1000);
}
