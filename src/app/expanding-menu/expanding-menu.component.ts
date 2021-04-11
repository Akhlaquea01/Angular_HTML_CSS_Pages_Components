import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanding-menu',
  templateUrl: './expanding-menu.component.html',
  styleUrls: ['./expanding-menu.component.css']
})
export class ExpandingMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   state=false;
  expand(){
    if(this.state==false){
      document.getElementById('items').style.transform='scaleX(1)';
      document.getElementById('toggle1').style.transform='rotate(45deg)';

      this.state=true;
    }
    else{
      document.getElementById('items').style.transform='scaleX(0)';
      document.getElementById('toggle1').style.transform='rotate(0deg)';
      this.state=false;
    }
  }
}
