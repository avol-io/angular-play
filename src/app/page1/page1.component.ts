import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.scss"]
})
export class Page1Component implements OnInit {
  totalClick = 0;
  constructor(private router: Router, private activeRouter: ActivatedRoute) {}

  ngOnInit() {}

  yeah() {
    this.totalClick++;
  }

  goToPage2() {
    this.router.navigate(["two"]);
  }
}
