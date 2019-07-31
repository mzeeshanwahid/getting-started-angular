import { Component, OnInit } from "@angular/core";
import echarts from "echarts";
import "echarts-gl/dist/echarts-gl";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  selectedNav: String;

  constructor() {
    this.selectedNav = "Employees";
  }

  ngOnInit() {
    var chart = echarts.init(document.getElementById("emp-chart"));
    chart.setOption({
      angleAxis: {
        type: "category",
        data: ["A", "B", "C", "D", "E", "F", "G"],
        z: 10
      },
      radiusAxis: {},
      polar: {},
      series: [
        {
          type: "bar",
          data: [1, 2, 3, 4, 3, 5, 1],
          coordinateSystem: "polar",
          name: "A",
          stack: "a"
        },
        {
          type: "bar",
          data: [2, 4, 6, 1, 3, 2, 1],
          coordinateSystem: "polar",
          name: "B",
          stack: "a"
        },
        {
          type: "bar",
          data: [1, 2, 3, 4, 1, 2, 5],
          coordinateSystem: "polar",
          name: "C",
          stack: "a"
        }
      ],
      legend: {
        show: true,
        data: ["A", "B", "C"]
      }
    });
  }
}
