import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  @Input() selectedNav: string;
  home: String;
  employees: String;
  departments: String;

  constructor() { }

  ngOnInit() {
    if(this.selectedNav === "Home") this.home = "active";
    if(this.selectedNav === "Employees") this.employees = "active";
    if(this.selectedNav === "Departments") this.departments = "active";
  }

}
