import { Component, OnInit } from "@angular/core";
import echarts from "echarts";
import "echarts-gl/dist/echarts-gl";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: ["./departments.component.css"]
})
export class DepartmentsComponent implements OnInit {
  selectedNav: String;

  constructor() {
    this.selectedNav = "Departments";
  }

  ngOnInit() {
    var chart = echarts.init(document.getElementById("dep-chart"));
    chart.setOption({
      title: {
        text: "Departments",
        subtext: "Departments of a Company"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: ["Requirement Analysis", "Design", "Development", "Deploy", "Testing"]
      },
      series: [
        {
          name: "Series 1",
          type: "funnel",
          left: "10%",
          width: "80%",
          label: {
            normal: {
              formatter: "{b}预期"
            },
            emphasis: {
              position: "inside",
              formatter: "{b}预期: {c}%"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              opacity: 0.7
            }
          },
          data: [
            { value: 60, name: "访问" },
            { value: 40, name: "咨询" },
            { value: 20, name: "订单" },
            { value: 80, name: "点击" },
            { value: 100, name: "展现" }
          ]
        },
        {
          name: "实际",
          type: "funnel",
          left: "10%",
          width: "80%",
          maxSize: "80%",
          label: {
            normal: {
              position: "inside",
              formatter: "{c}%",
              textStyle: {
                color: "#fff"
              }
            },
            emphasis: {
              position: "inside",
              formatter: "{b}实际: {c}%"
            }
          },
          itemStyle: {
            normal: {
              opacity: 0.5,
              borderColor: "#fff",
              borderWidth: 2
            }
          },
          data: [
            { value: 30, name: "访问" },
            { value: 10, name: "咨询" },
            { value: 5, name: "订单" },
            { value: 50, name: "点击" },
            { value: 80, name: "展现" }
          ]
        }
      ]
    });
  }
}
