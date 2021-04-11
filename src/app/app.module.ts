import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Santa3dCardComponent } from './santa3d-card/santa3d-card.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AuroraUiComponent } from './aurora-ui/aurora-ui.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CardsDynamicComponent } from './cards-dynamic/cards-dynamic.component';
import { GoldenPageComponent } from './golden-page/golden-page.component';
import { ExpandingMenuComponent } from './expanding-menu/expanding-menu.component';
import { ButtonComponent } from './button/button.component';
import { TransCardUiComponent } from './trans-card-ui/trans-card-ui.component';
import { GrootCardUiComponent } from './groot-card-ui/groot-card-ui.component';
import { ClockuiComponent } from './clockui/clockui.component';
import { GlassFormComponent } from './glass-form/glass-form.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { SwitchComponent } from './switch/switch.component';
import { ImageComponent } from './image/image.component';
import { TextStyleComponent } from './text-style/text-style.component';
import { LoaderComponent } from './loader/loader.component';
import { Loader2Component } from './loader2/loader2.component';
import { FormWhiteComponent } from './form-white/form-white.component';
import { Loader3Component } from './loader3/loader3.component';
import { SwitchOmletComponent } from './switch-omlet/switch-omlet.component';
import { CardsAnimatedComponent } from './cards-animated/cards-animated.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PulseComponent } from './pulse/pulse.component';
import { QuotesCardComponent } from './quotes-card/quotes-card.component';
import { RadioCardComponent } from './radio-card/radio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Santa3dCardComponent,
    WeatherCardComponent,
    AuroraUiComponent,
    BookmarkComponent,
    CardsDynamicComponent,
    GoldenPageComponent,
    ExpandingMenuComponent,
    ButtonComponent,
    TransCardUiComponent,
    GrootCardUiComponent,
    ClockuiComponent,
    GlassFormComponent,
    GridCardsComponent,
    SwitchComponent,
    ImageComponent,
    TextStyleComponent,
    LoaderComponent,
    Loader2Component,
    FormWhiteComponent,
    Loader3Component,
    SwitchOmletComponent,
    CardsAnimatedComponent,
    SpinnerComponent,
    PulseComponent,
    QuotesCardComponent,
    RadioCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
