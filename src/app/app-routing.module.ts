import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";

const routes: Routes = [
  {
    path: "one",
    component: Page1Component
  },
  { path: "two", component: Page2Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
