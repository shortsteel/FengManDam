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
            width: 1
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
  timeList: string[];

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
    this.timeList = WeatherCondition.DATA.map(record => record.date);
    this.dateRange.controls.start.setValue(this.timeList[0]);
    this.dateRange.controls.end.setValue(this.timeList[this.timeList.length - 1]);
    this.setChartData(WeatherCondition.DATA);
  }

  chartInit(chartInstance): void {
    this.chartInstance = chartInstance;
  }

  setChartDateWithRange(): void {
    const startDate: string = this.dateRange.controls.start.value;
    const endDate: string = this.dateRange.controls.end.value;
    if (startDate > endDate) {
      return;
    }

    let data = WeatherCondition.DATA;
    data = data.filter(item => {
      const itemDate = item.date;
      return itemDate >= startDate;
    });
    data = data.filter(item => {
      const itemDate = item.date;
      return (itemDate <= endDate) || (itemDate === endDate);
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
