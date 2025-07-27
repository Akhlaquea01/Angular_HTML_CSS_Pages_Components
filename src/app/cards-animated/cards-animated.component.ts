import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-animated',
  templateUrl: './cards-animated.component.html',
  styleUrls: ['./cards-animated.component.css']
})
export class CardsAnimatedComponent implements OnInit {
  @Input() name: string = 'Akhlaque';
  @Input() profession: string = 'Web Developer';
  @Input() bio: string = 'Passionate Front-end Developer with over 4.5 years of experience in crafting dynamic web applications with a focus on Angular and Node.js.';
  @Input() contactUrl: string = 'https://iam-akhlaque.netlify.app/';
  @Input() photoUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  contactMe() {
    window.open(this.contactUrl, '_blank');
  }
}
