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
      left: 'center',
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
      formatter: '{b}<br/>{a0}:{c0}m,<br/>{a1}:{c1}m³/s,<br/>{a2}:{c2}m³/s,<br/>'
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
      name: '水位(m)',
      type: 'value',
      scale: true
    }, {
      name: '流量(m³/s)',
      type: 'value',
      scale: true
    }],
    series: [{
      yAxisIndex: 0,
      name: '上游水位',
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
    }, {
      yAxisIndex: 1,
      name: '入库流量',
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
    }, {
      yAxisIndex: 1,
      name: '出库流量',
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
    start: new FormControl(),
    end: new FormControl()
  });
  timeList: string[];

  constructor(@Inject(LOCALE_ID) private locale: string) {
  }

  ngOnInit(): void {
    this.timeList = ScheduleOperation.DATA.map(record => record.date);
    this.dateRange.controls.start.setValue(this.timeList[0]);
    this.dateRange.controls.end.setValue(this.timeList[this.timeList.length - 1]);
    this.setChartData(ScheduleOperation.DATA);
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

    let data = ScheduleOperation.DATA;
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
