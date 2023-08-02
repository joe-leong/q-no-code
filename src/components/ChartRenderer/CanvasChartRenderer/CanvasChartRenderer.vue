<template>
  <div class="zrender-canvas" ref="containerRef">CanvasChartRenderer</div>
</template>

<script setup lang="ts">
import * as zrender from 'zrender'
const containerRef = shallowRef<HTMLDivElement | null>(null)
let intervaler: number | undefined = void 0
onMounted(() => {
  const zr = zrender.init(containerRef.value, { renderer: 'canvas' })
  const w = zr.getWidth()
  const h = zr.getHeight()
  let t1 = new zrender.Text({
    style: {
      text: 'zrender',
      align: 'center',
      verticalAlign: 'middle',
      fill: '#0ff',
      fontSize: 200,
      fontFamily: 'Lato',
      fontWeight: 'bolder',
      // blend: 'lighten',
      x: w / 2 + 5,
      y: h / 2
    }
  })
  zr.add(t1)

  let t2 = new zrender.Text({
    culling: true,
    style: {
      text: 'zrender',
      fontSize: 200,
      align: 'center',
      fill: '#fff',
      verticalAlign: 'middle',
      fontFamily: 'Lato',
      fontWeight: 'bolder',
      x: w / 2,
      y: h / 2
    }
  })
  zr.add(t2)

  let lines: zrender.Rect[] = []
  for (let i = 0; i < 16; ++i) {
    let line = new zrender.Rect({
      shape: {
        x: w * (Math.random() - 0.3),
        y: h * Math.random(),
        width: w * (Math.random() + 0.3),
        height: Math.random() * 8
      },
      style: {
        fill: ['#ff0', '#f0f', '#0ff', '#00f'][Math.floor(Math.random() * 4)],
        blend: 'lighten',
        opacity: 0
      }
    })
    zr.add(line)
    lines.push(line)
  }

  intervaler = window.setInterval(() => {
    if (Math.random() > 0.2) {
      t2.attr('style', {
        x: w / 2 + Math.random() * 50,
        y: h / 2
      })
      for (let i = 0; i < lines.length; i++) {
        lines[i].attr('shape', {
          x: w * Math.random(),
          y: h * Math.random(),
          width: w * Math.random(),
          height: Math.random() * 8
        })
        lines[i].attr('style', {
          opacity: 1
        })
      }
      window.setTimeout(function () {
        t2.attr('style', {
          x: w / 2,
          y: h / 2
        })

        for (let i = 0; i < lines.length; ++i) {
          lines[i].attr('style', {
            opacity: 0
          })
        }
      }, 100)
    }
  }, 500)
})

onUnmounted(() => {
  window.clearInterval(intervaler)
})
</script>

<style scoped>
.zrender-canvas {
  width: 100%;
  aspect-ratio: 2;
  background-color: #333;
}
</style>
