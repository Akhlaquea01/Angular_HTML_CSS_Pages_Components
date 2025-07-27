import { Component } from '@angular/core';

interface NavItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Css';
  
  navItems: NavItem[] = [
    { path: '/card3', label: 'Animated Cards' },
    { path: '/bookmark', label: 'Bookmark' },
    { path: '/cards', label: 'Dynamic Cards' },
    { path: '/golden', label: 'Golden Page' },
    { path: '/expand', label: 'Expanding Menu' },
    { path: '/button', label: 'Button' },
    { path: '/transparent', label: 'Transparent Card' },
    { path: '/groot', label: 'Groot Card' },
    { path: '/clock', label: 'Clock UI' },
    { path: '/form', label: 'Glass Form' },
    { path: '/form2', label: 'White Form' },
    { path: '/gridcards', label: 'Grid Cards' },
    { path: '/switch', label: 'Switch' },
    { path: '/switch2', label: 'Switch Omlet' },
    { path: '/image', label: 'Image' },
    { path: '/text', label: 'Text Style' },
    { path: '/loader', label: 'Loader' },
    { path: '/loader2', label: 'Loader 2' },
    { path: '/loader3', label: 'Loader 3' },
    { path: '/spinner', label: 'Spinner' },
    { path: '/quotes', label: 'Quotes Card' },
    { path: '/radio', label: 'Radio Card' }
  ];
}
