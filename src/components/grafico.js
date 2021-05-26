import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";

var userLang = navigator.language || navigator.userLanguage; 
const episodes = userLang.startsWith('en')?'episodes':'episodios'
const seasons = userLang.startsWith('en')?'seasons':'temporadas'

function Grafico(props){
    const canvas = useRef()

    useEffect(()=>{
        const datos = props.series
        const width = 700;
        const height = 500;
        const margin = { top: 11, left: 60, bottom: 40, right: 10 };
        const iwidth = width - margin.left - margin.right;
        const iheight = height - margin.top - margin.bottom;

        const svg = d3
          .select(canvas.current)
          .attr("width", width)
          .attr("height", height);
        
        let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const y = d3.scaleLinear() 
              .domain([0, 13])
              .range([iheight, 0]);
          
        const x = d3.scaleLinear()
          .domain([0,350] ) 
          .range([0, iwidth])
          
    
    
        g.selectAll("circle")
            .data(datos)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(d.episodes); } )
            .attr("cy", function (d) { return y(d.seasons); } )
            .attr("r", 7)
            .style("fill", "orange")
        
        g.selectAll('text')
            .data(datos)
            .enter()
            .append('text')
            .attr("x", function(d){
                return x(5+d.episodes)
            })
            .attr("y", function(d){
                return y(d.seasons)
            })
            .text(d => d.name)
            .attr('font-size', 10)
            .attr('font-family', 'serif')
        
        svg.append("text")
            .attr("class", "y label")
            .attr("text-anchor", "end")
            .attr("y", 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text(seasons)
            .attr('font-size', 10)
            .attr('font-family', 'serif');

        svg.append("text")
            .attr("class", "x label")
            .attr("text-anchor", "end")
            .attr("x", width)
            .attr("y", height - 6)
            .text(episodes)
            .attr('font-size', 10)
            .attr('font-family', 'serif');

        g.append("g")
          .classed("x--axis", true)
          .call(d3.axisBottom(x))
          .attr("transform", `translate(0, ${iheight})`); 
          
        g.append("g")
          .classed("y--axis", true)
          .call(d3.axisLeft(y));
    })

    return(
        <div id="canvas">
            <svg ref={canvas}>
            </svg>
        </div>
    )
}

export default Grafico