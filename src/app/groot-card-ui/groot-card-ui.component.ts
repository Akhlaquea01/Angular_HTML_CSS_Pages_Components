import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-groot-card-ui',
  templateUrl: './groot-card-ui.component.html',
  styleUrls: ['./groot-card-ui.component.css']
})
export class GrootCardUiComponent implements OnInit {
  @Input() imageUrl: string = 'assets/image.png';
  @Input() title: string = 'GROOT';
  @Input() description: string = 'This tree-like being branched out of his comfort zone to help the Guardians of the Galaxy keep the people of the universe safe.';

  constructor() { }

  ngOnInit(): void {
  }

}
