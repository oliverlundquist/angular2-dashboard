import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard';
import { ProductsComponent } from './products';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent
  ],
  providers: [
    // HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
