import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OnlinePoint} from '../../data/online-point';


@Component({
  selector: 'app-online-point',
  templateUrl: './online-point.component.html',
  styleUrls: ['./online-point.component.css']
})
export class OnlinePointComponent implements OnInit {
  chartOptions: any = {
    title: {
      text: '在线点位',
      subtext: '',
      left: 'center'
    },
    legend: {
      data: ['温度'],
      top: 30
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      },
      right: 80
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}<br/>{a0}:{c0}°C'
    },
    grid: {
      top: '70px',
      containLabel: false
    },
    xAxis: [{
      type: 'category',
      data: [],
      axisLabel: {
        rotate: 45
      }
    }],
    yAxis: [{
      name: '温度(°C)',
      type: 'value',
      scale: true
    }],
    series: [{
      yAxisIndex: 0,
      name: '温度',
      type: 'line',
      data: [],
      symbolSize: 0,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 1
          }
        }
      }
    }]
  };

  chartInstance: any;
  dateRange = new FormGroup({
    start: new FormControl(new Date(2014, 0, 1)),
    end: new FormControl(new Date(2020, 9, 31)),
    position: new FormControl('wsd')
  });

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
  }

  chartInit(chartInstance): void {
    this.chartInstance = chartInstance;
    this.setChartData();
  }

  setChartData(): void {
    const startDate: Date = this.dateRange.controls.start.value;
    const endDate: Date = this.dateRange.controls.end.value;
    const position: string = this.dateRange.controls.position.value;

    let data = OnlinePoint.DATA;
    data = data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate.getTime() >= startDate.getTime();
    });
    data = data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate.getTime() <= endDate.getTime();
    });


    const dates: string[] = data.map(record => record.date);
    const temperatures: number[] = data.map(record => record[position]);

    this.chartOptions.xAxis[0].data = dates;
    this.chartOptions.series[0].data = temperatures;
    this.chartInstance.setOption(this.chartOptions);
  }
}
