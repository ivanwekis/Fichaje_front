import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { StatsService } from '../../../services/stats.services';
import { ActivatedRoute } from '@angular/router';
import { Register } from '../../../models/register.model';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrl: './bar-charts.component.css'
})
export class BarChartsComponent {
  private root!: am5.Root;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone,
   private statsService: StatsService, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    // Chart code goes in here
    const dni = this.route.snapshot.paramMap.get('dni') as string;
    this.statsService.getRegistersByUser(dni).subscribe(
      (data:any) => {
        this.statsService.registers = data.registers.map((register: Register) => new Register(register));
        const stats = this.statsService.getHoursWorkedPerWeek();
        console.log(stats);
        this.browserOnly(() => {
          let root = am5.Root.new("chartdiv");
          root.setThemes([am5themes_Animated.new(root)]);    
          let chart = root.container.children.push(
            am5xy.XYChart.new(root, {
              panY: false,
              layout: root.verticalLayout
            })
          );
          // Create Y-axis
          let yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
              renderer: am5xy.AxisRendererY.new(root, {})
            })
          );
  
          // Create X-Axis
          let xAxis = chart.xAxes.push(
            am5xy.CategoryAxis.new(root, {
              renderer: am5xy.AxisRendererX.new(root, {}),
              categoryField: "category"
            })
          );
          xAxis.data.setAll(stats);
    
          // Create series
          let series1 = chart.series.push(
            am5xy.ColumnSeries.new(root, {
              name: "Series",
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "value",
              categoryXField: "category"
            })
          );
          series1.data.setAll(stats);
    
          // Add legend
          let legend = chart.children.push(am5.Legend.new(root, {}));
          legend.data.setAll(chart.series.values);
    
          // Add cursor
          chart.set("cursor", am5xy.XYCursor.new(root, {}));
    
          this.root = root;
        });
      });
  }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }
}
