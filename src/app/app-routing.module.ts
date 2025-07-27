import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ButtonComponent } from './button/button.component';
import { CardsAnimatedComponent } from './cards-animated/cards-animated.component';
import { CardsDynamicComponent } from './cards-dynamic/cards-dynamic.component';
import { ClockuiComponent } from './clockui/clockui.component';
import { ExpandingMenuComponent } from './expanding-menu/expanding-menu.component';
import { FormWhiteComponent } from './form-white/form-white.component';
import { GlassFormComponent } from './glass-form/glass-form.component';
import { GoldenPageComponent } from './golden-page/golden-page.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { GrootCardUiComponent } from './groot-card-ui/groot-card-ui.component';
import { ImageComponent } from './image/image.component';
import { LoaderComponent } from './loader/loader.component';
import { Loader2Component } from './loader2/loader2.component';
import { Loader3Component } from './loader3/loader3.component';
import { QuotesCardComponent } from './quotes-card/quotes-card.component';
import { RadioCardComponent } from './radio-card/radio-card.component';
import { Santa3dCardComponent } from './santa3d-card/santa3d-card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SwitchOmletComponent } from './switch-omlet/switch-omlet.component';
import { SwitchComponent } from './switch/switch.component';
import { TextStyleComponent } from './text-style/text-style.component';
import { TransCardUiComponent } from './trans-card-ui/trans-card-ui.component';

const routes: Routes = [
  {path:'santa' , component:Santa3dCardComponent },
  {path:'card3' , component:CardsAnimatedComponent },
  {path:'bookmark' , component:BookmarkComponent },
  {path:'cards' , component: CardsDynamicComponent},
  {path:'golden' , component: GoldenPageComponent},
  {path:'expand' , component: ExpandingMenuComponent},
  {path:'button' , component: ButtonComponent},
  {path:'transparent' , component: TransCardUiComponent},
  {path:'groot' , component: GrootCardUiComponent},
  {path:'clock' , component: ClockuiComponent},
  {path:'form' , component: GlassFormComponent},
  {path:'form2' , component: FormWhiteComponent},
  {path:'gridcards' , component: GridCardsComponent},
  {path:'switch' , component: SwitchComponent},
  {path:'switch2' , component: SwitchOmletComponent},
  {path:'image' , component: ImageComponent},
  {path:'text' , component: TextStyleComponent},
  {path:'loader' , component: LoaderComponent},
  {path:'loader2' , component: Loader2Component},
  {path:'loader3' , component: Loader3Component},
  {path:'spinner' , component: SpinnerComponent},
  {path:'quotes' , component: QuotesCardComponent},
  {path:'radio' , component: RadioCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
