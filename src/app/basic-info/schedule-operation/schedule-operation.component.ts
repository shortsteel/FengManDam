import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import {ScheduleOperation} from '../../data/schedule-operation';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-schedule-operation',
  templateUrl: './schedule-operation.component.html',
  styleUrls: ['./schedule-operation.component.css']
})
export class ScheduleOperationComponent implements OnInit {
  chartOptions: any = {
    title: {
      text: '调度运行情况',
      left: 'center'
    },
    legend: {
      data: ['上游水位', '入库流量', '出库流量'],
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
      formatter: '{b}<br/>{a0}:{c0}米,<br/>{a1}:{c1}立方米/秒,<br/>{a2}:{c2}立方米/秒,<br/>'
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
      name: '水位(米)',
      type: 'value',
      scale: true
    }, {
      name: '流量(立方米/秒)',
      type: 'value',
      scale: true
    }],
    series: [{
      yAxisIndex: 0,
      name: '上游水位',
      type: 'line',
      data: [],
      itemStyle: {
        normal: {
          lineStyle: {
            width: .5
          }
        }
      }
    }, {
      yAxisIndex: 1,
      name: '入库流量',
      type: 'line',
      data: [],
      itemStyle: {
        normal: {
          lineStyle: {
            width: .5
          }
        }
      }
    }, {
      yAxisIndex: 1,
      name: '出库流量',
      type: 'line',
      data: [],
      itemStyle: {
        normal: {
          lineStyle: {
            width: .5
          }
        }
      }
    }]
  };

  chartInstance: any;
  dateRange = new FormGroup({
    start: new FormControl(new Date(2013, 5, 1)),
    end: new FormControl(new Date(2020, 11, 28))
  });

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
    this.setChartDateWithRange();
  }

  chartInit(chartInstance): void {
    this.chartInstance = chartInstance;
  }

  setChartDateWithRange(): void {
    const startDate: Date = this.dateRange.controls.start.value;
    const endDate: Date = this.dateRange.controls.end.value;

    let data = ScheduleOperation.DATA;
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

  setChartData(data: ScheduleOperation[]): void {
    const dates: string[] = data.map(record => record.date);
    const upstreams: number[] = data.map(record => record.upstream);
    const inflows: number[] = data.map(record => record.inflow);
    const outflows: number[] = data.map(record => record.outflow);

    this.chartOptions.xAxis[0].data = dates;
    this.chartOptions.series[0].data = upstreams;
    this.chartOptions.series[1].data = inflows;
    this.chartOptions.series[2].data = outflows;
  }
}
