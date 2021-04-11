import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-dynamic',
  templateUrl: './cards-dynamic.component.html',
  styleUrls: ['./cards-dynamic.component.css']
})
export class CardsDynamicComponent implements OnInit {
 theme=document.querySelector(':root');
  constructor() { }

  ngOnInit(): void {
  }
change(){
console.log("Firoz");

// this.theme.style.setProperty("--theme-color", "#3498db");
}
}


// <script>
// const theme = document.querySelector(':root');
// const btns = document.querySelectorAll('.btn');

// btns.forEach(function(btn){

//     btn.addEventListener("click", function(e){

//         const color = e.currentTarget.classList;

//         if(color.contains("btn1")){
//             theme.style.setProperty("--theme-color", "#3498db");
//         }
//         else if(color.contains("btn2")){
//             theme.style.setProperty("--theme-color", "#ff1756");
//         }
//         else if(color.contains("btn3")){
//             theme.style.setProperty("--theme-color", "#1cb65d");
//         }
//         else if(color.contains("btn4")){
//             theme.style.setProperty("--theme-color", "#8e44ad");
//         }
//         else{
//             theme.style.setProperty("--theme-color", "#f4b932");
//         }
//     });
// });
// </script>
