import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsDynamicComponent } from './cards-dynamic/cards-dynamic.component';
import { ExpandingMenuComponent } from './expanding-menu/expanding-menu.component';
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
import { QuotesCardComponent } from './quotes-card/quotes-card.component';
import { RadioCardComponent } from './radio-card/radio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsDynamicComponent,
    ExpandingMenuComponent,
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
