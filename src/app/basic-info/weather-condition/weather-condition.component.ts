import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {WeatherCondition} from '../../data/weather-condition';

@Component({
  selector: 'app-weather-condition',
  templateUrl: './weather-condition.component.html',
  styleUrls: ['./weather-condition.component.css']
})
export class WeatherConditionComponent implements OnInit {
  chartOptions: any = {
    title: {
      text: '气象条件',
      subtext: '吉林站（43.95°N，126.47°E）数据,海拔：183.4m',
      left: 'center'
    },
    legend: {
      data: ['温度'],
      left: 50
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
      name: '气温',
      type: 'line',
      data: [],
      symbolSize: 0,
      itemStyle: {
        normal: {
          lineStyle: {
            width: .8
          }
        }
      }
    }]
  };

  chartInstance: any;
  dateRange = new FormGroup({
    start: new FormControl(new Date(2013, 0, 1)),
    end: new FormControl(new Date(2020, 9, 31))
  });

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
    this.setChartData(WeatherCondition.DATA);
  }

  chartInit(chartInstance): void {
    this.chartInstance = chartInstance;
  }

  setChartDateWithRange(): void {
    const startDate: Date = this.dateRange.controls.start.value;
    const endDate: Date = this.dateRange.controls.end.value;

    let data = WeatherCondition.DATA;
    data = data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate.getTime() >= startDate.getTime();
    });
    data = data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate.getTime() <= endDate.getTime();
    });

    this.setChartData(data);
    this.chartInstance.setOption(this.chartOptions);
  }

  setChartData(data: WeatherCondition[]): void {
    const dates: string[] = data.map(record => record.date);
    const temperatures: number[] = data.map(record => record.temperature);

    this.chartOptions.xAxis[0].data = dates;
    this.chartOptions.series[0].data = temperatures;
  }
}
