import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page2",
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.scss"]
})
export class Page2Component implements OnInit {
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit() {}

  goToPage1() {
    this.router.navigate(["one"]);
  }
}
