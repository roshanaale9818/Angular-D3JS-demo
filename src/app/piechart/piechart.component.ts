import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

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
  private svg;
  private margin = 50;
  private width = 600;
  private height = 500;
// The radius of the pie chart is half the smallest side so we do
  private radius = Math.min(this.width,this.height)/2 - this.margin;
  private colors = d3.scaleOrdinal(d3.schemeDark2);
  constructor() { }

  ngOnInit() {
    this.createSvg();
    this.drawCharts()
  }
  private createSvg():void{
    this.svg = d3.select('#pie')
    .append('svg')
    .attr('height',this.height)
    .attr('width',this.width)
    .append('g')
    .attr(
      'transform',
      `translate(${this.width/2},${this.height/2})`
    )
  }
  public drawCharts(){
    const colors = this.colors;
    const pie = d3.pie<any>().value((d:any)=>Number(d.value));
    const segments = d3.arc().innerRadius(0).outerRadius(this.radius);
    this.svg.selectAll('pies')
    .data(pie(this.dummy_data))
    .enter()
    .append('path')
    .attr('d',segments)
    .attr('fill',function(d,i){
      return colors(d.data.value);
    })
    .attr('stroke','white')
    .style('stroke-width','1px')

       // Add title i.e region
       const region = d3.arc()
       .innerRadius(100)
       .outerRadius(this.radius);
    this.svg.selectAll('pies')
          .data(pie(this.dummy_data))
          .enter()
          .append('text')
          .text(function (d){
              return d.data.region;
          })
          .attr('transform',function (d){
                return `translate(${region.centroid(d)})`
              })
    .style("text-anchor", "middle")
    .style("font-size", 15);
  }


}
