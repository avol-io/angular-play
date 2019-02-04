import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { RouteReuseStrategy } from "@angular/router";
import { CustomReuseStrategyService } from "./services/custom-reuse-strategy.service";

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategyService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
