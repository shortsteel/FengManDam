import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ReservoirVertical} from '../../data/reservoir-vertical';

@Component({
  selector: 'app-reservoir-vertical',
  templateUrl: './reservoir-vertical.component.html',
  styleUrls: ['./reservoir-vertical.component.css']
})
export class ReservoirVerticalComponent implements OnInit {
  chartOptions: any = {
    title: {
      text: '库区垂向',
      subtext: '',
      left: 'center'
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      },
      right: 80
    },
    tooltip: {
      trigger: 'axis',
      formatter: '深度:{b}m<br/>{a0}:{c0}°C'
    },
    grid: {
      top: '70px',
      containLabel: false
    },
    xAxis: [{
      name: '水深(m)',
      type: 'category',
      data: [],
      axisLabel: {
        rotate: 45
      }
    }],
    yAxis: [{
      name: '温度(°C)',
      type: 'value',
      scale: true,
      axisLabel: {
        formatter: '{value} °C'
      }
    }],
    series: [{
      yAxisIndex: 0,
      name: '气温',
      type: 'line',
      data: [],
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
  dataList: ReservoirVertical[] = ReservoirVertical.DATA;
  positionList: string[];
  dataSelectFormGroup = new FormGroup({
    time: new FormControl(),
    position: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
    this.dataSelectFormGroup.controls.time.valueChanges.subscribe(() => {
      this.positionList = this.dataList.filter(data => data.date === this.dataSelectFormGroup.controls.time.value)[0].data
        .map(positionData => positionData.position);
      this.dataSelectFormGroup.controls.position.setValue(this.positionList[0]);
      this.setChartData();
    });
    this.dataSelectFormGroup.controls.position.valueChanges.subscribe(() => this.setChartData());
  }

  chartInit(chartInstance): void {
    this.chartInstance = chartInstance;
    this.dataSelectFormGroup.controls.time.setValue(this.dataList[0].date);
    this.dataSelectFormGroup.controls.position.setValue(this.positionList[0]);
  }

  setChartData(): void {
    const dataItem = this.dataList.filter(data => data.date === this.dataSelectFormGroup.controls.time.value)[0];
    const positionDataItem = dataItem.data
      .filter(positionData => positionData.position === this.dataSelectFormGroup.controls.position.value)[0];
    this.chartOptions.xAxis[0].data = positionDataItem.depth;
    this.chartOptions.series[0].data = positionDataItem.temperature;
    this.chartInstance.setOption(this.chartOptions);
  }
}
