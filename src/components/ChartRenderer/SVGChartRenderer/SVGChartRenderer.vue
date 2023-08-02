<template>
  <div class="svg" ref="containerRef"></div>
</template>

<script setup lang="ts">
import * as d3 from 'd3'

const containerRef = shallowRef<HTMLDivElement | null>(null)

onMounted(() => {
  const width = containerRef.value?.clientWidth || 1024
  const height = containerRef.value?.clientHeight || 768
  const scaleRate = (width / 1024) * 800
  // 添加外层元素，以及分组元素
  const svg = d3
    .select(containerRef.value)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(0,0)')
  const projection = d3
    .geoMercator()
    .center([107, 38])
    .scale(scaleRate)
    .translate([width / 2, height / 2])
  const path = d3.geoPath(projection)
  d3.json<d3.ExtendedFeatureCollection>(
    'https://gist.githubusercontent.com/zhulinpinyu/8e18d57b3b18fb74e776/raw/efbb74cfea53decb1fe7d6bf279fd351c28c4810/china_simplify.json'
  ).then((res: any) => {
    const { features } = res
    const featuresLen = features.length
    // 线性缩放，渐变颜色
    const colors = d3.scaleLinear(
      [0, featuresLen * 0.33, featuresLen * 0.66, featuresLen],
      ['#B58929', '#C61C6F', '#268BD2', '#85992C']
    )
    // 添加提示
    const tooltip = d3.select('body').append('div').attr('class', 'tooltip').style('opacity', 0)
    svg
      .selectAll('path')
      .data(features)
      .enter()
      .append('path')
      .attr('stroke', '#000')
      .attr('stroke-width', 1)
      .style('opacity', 0.8)
      .attr('fill', function (d, i: number) {
        return colors(i)
      })
      .attr('d', path)
      .on('mouseover', function (ev, d) {
        const hoveredData = d as d3.ExtendedFeature
        if (!hoveredData) return
        // @ts-ignore
        d3.select(this).style('opacity', 1)
        tooltip
          .transition()
          .duration(200)
          .style('opacity', 0.9)
          // @ts-ignore
          .style('--color-path', d3.select(this).attr('fill'))
        tooltip
          .text(hoveredData.properties.name)
          .style('left', ev.pageX + 'px')
          .style('top', ev.pageY + 'px')
      })
      .on('mouseout', function () {
        // @ts-ignore
        d3.select(this).style('opacity', 0.8)
        tooltip.transition().duration(500).style('opacity', 0)
      })
  })
})
</script>

<style scoped>
.svg {
  width: 100%;
  aspect-ratio: 1.5;
}
</style>
<style>
.tooltip {
  position: absolute;
  z-index: 9999;
  border-radius: 2px;
  padding: 0;
  font-size: 13px;
  text-align: left;
  color: var(--color-path, var(--color-primary));
  pointer-events: none;
  filter: brightness(1.5);
  text-shadow: 0 0 4px rgb(0 0 0 / 80%);
}
</style>
