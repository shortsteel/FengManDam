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
      formatter: (value, index) => {
        console.log(value);
        console.log(index);
        const data = value[0].data;
        return '深度：' + Number(data[1]).toFixed(3) + 'm, 温度: ' + Number(data[0]).toFixed(3) + '°C';
      },
    },
    grid: {
      top: '70px',
      containLabel: false
    },
    xAxis: [{
      name: '温度(°C)',
      nameTextStyle: {
        padding: [0, 0, 0, -10]    // 四个数字分别为上右下左与原位置距离
      },
      position: 'top',
      type: 'value',
      data: [],
      min: 0,
      max: 30,
      axisLabel: {
        // rotate: 45,
        formatter: (value) => {
          return value;
        }
      }
    }],
    yAxis: [{
      name: '水深(m)',
      type: 'value',
      min: 0,
      inverse: true
    }],
    series: [{
      yAxisIndex: 0,
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
    this.chartOptions.xAxis[0].data = positionDataItem.temperature;

    const seriesData: number[][] = [];
    for (let i = 0; i < positionDataItem.temperature.length; i++) {
      if (i < positionDataItem.depth.length) {
        seriesData.push([positionDataItem.temperature[i], positionDataItem.depth[i]]);
      }
    }
    this.chartOptions.series[0].data = seriesData;
    this.chartInstance.setOption(this.chartOptions);
  }
}
