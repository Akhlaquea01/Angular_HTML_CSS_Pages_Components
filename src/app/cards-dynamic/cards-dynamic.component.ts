import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-dynamic',
  templateUrl: './cards-dynamic.component.html',
  styleUrls: ['./cards-dynamic.component.css']
})
export class CardsDynamicComponent implements OnInit {
  @Input() name: string = 'Akhlaque Ahmad';
  @Input() title: string = 'Senior Software Engineer';
  @Input() followers: number = 1600;
  @Input() following: number = 852;
  @Input() imageUrl: string = 'assets/MyPic.jpg';

  themeColors = [
    { id: 'btn1', color: '#3498db', label: 'Blue' },
    { id: 'btn2', color: '#ff1756', label: 'Red' },
    { id: 'btn3', color: '#1cb65d', label: 'Green' },
    { id: 'btn4', color: '#8e44ad', label: 'Purple' },
    { id: 'btn5', color: '#f4b932', label: 'Yellow' }
  ];

  activeColor: string = this.themeColors[1].color; // default to red
  isFollowing: boolean = false;

  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--theme-color', this.activeColor);
  }

  changeColor(color: string): void {
    this.activeColor = color;
    document.documentElement.style.setProperty('--theme-color', color);
  }

  toggleFollow(): void {
    this.isFollowing = !this.isFollowing;
  }

  onMessage(): void {
    console.log('Message button clicked');
    // Add your message functionality here
  }
}

