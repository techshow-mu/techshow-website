import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ButtonComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
