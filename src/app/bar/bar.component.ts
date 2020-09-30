import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DummyData } from './../models/dummy-data';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  //dummy array of objects
  private dummy_data = [{
    id: 'd1',
    region: 'USA',
    value: 10
}, {
    id: 'd2',
    region: 'India',
    value: 12
},
{
    id: 'd4',
    region: 'Nepal',
    value: 6
},
{
    id: 'd3',
    region: 'China',
    value: 11
},
{
    id: 'd4',
    region: 'Germany',
    value: 6
},
{
  id: 'd5',
  region: 'France',
  value: 14
}
];

margins = {
  top: 20,
  bottom: 10,
  left: 20
}
chart_width = 600 - this.margins.left;
chart_height = 400 - this.margins.top - this.margins.bottom;
svg;





  constructor() {
   }

  ngOnInit() {
    this.drawChart();
  this.drawBars(this.dummy_data);
  }

  private drawChart(){
    this.svg = d3.select('.chartContainer')
              .append('svg')
              .attr('width',this.chart_width + this.margins.left)
              .attr('height',this.chart_height + this.margins.top + this.margins.bottom)
              // .style('background','darkblue');
  }

private drawBars(dummydata:DummyData[]){
    const chart_height = this.chart_height;
   //scale band divides into equal width with the range of total width of svg
   const xScale = d3.scaleBand()
   .domain(dummydata.map((d)=>d.region))
   .range([0,this.chart_width]).padding(0.2);
   const yScale = d3.scaleLinear().domain([0, d3.max(dummydata, function(d) {
    return (d.value) + 3;
   })])
  .range([this.chart_height, 0]);

  const chart = this.svg.append("g");
  chart.selectAll('rect')
  .data(dummydata)
  .enter()
  .append('rect')
  .attr('width',xScale.bandwidth())
  .attr('height',function(d){
    return chart_height - yScale(d.value)
  })
  .attr('x',function(d){
    return xScale(d.region)
  })
  .attr('y',function(d){
    return yScale(d.value)
  })
  .style('fill','lightgreen');

  const xAxis = this.svg.append('g');
  xAxis.append('g').call(d3.axisBottom(xScale))
      .attr('transform', `translate(0,${chart_height})`)

  const yAxis = this.svg.append('g');
  yAxis.append('g').call(d3.axisLeft(yScale))
      .attr('transform', `translate(${this.margins.left - 2},0)`)


  // for labeling the value
  chart.selectAll('.label')
    .data(dummydata)
    .enter()
    .append('text')
    // .classed('label',true)
    .text(function(d) {
        return d.value;
    })
    .attr('class','label')
    .attr('x', function(d) {
        return xScale(d.region) + xScale.bandwidth() / 2;
    })
    .attr('y', function(d) {
        return yScale(d.value) - 20;
    })
    .attr('text-anchor', 'middle');
  }




}
