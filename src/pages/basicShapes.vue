<template>
  <div class="page-index">
    <h1>Basic Shapes</h1>
    <div class="section">
      <p>With and without Viewbox:</p>
      <svg viewBox="0 0 15 15">
        <rect x="0" y="0" fill="black" stroke="red" width="15" height="15" />
      </svg>
      <svg>
        <rect x="0" y="0" fill="black" stroke="red" width="15" height="15" />
      </svg>
    </div>

    <div class="section">
      <p>Circle and Circle-with-styling</p>
      <svg viewBox="0 0 20 20">

        <!-- CX is the center x, and CY is the center y of the circle -->
        <circle fill="black" stroke="red" cx="10" cy="10" r="9" />
      </svg>
      <svg viewBox="0 0 20 20" class="circle-styled">
        <circle fill="black" stroke="red" cx="10" cy="10" r="9" />
      </svg>
    </div>

    <div class="section">
      <p>SVG Groups</p>
      <svg viewBox="0 0 20 20" class="svg-group">
        <g class="group1">
          <circle fill="black" stroke="gray" cx="10" cy="10" r="9" />
          <circle fill="gray" stroke="black" cx="10" cy="10" r="7" />
        </g>
        <polygon stroke="black" fill="transparent" stroke-width=".2" points="10,4 5,13 15,13" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicShapes'
}
</script>

<style scoped lang="scss">
svg {
  width: 100px;
  height: 100px;
}
.circle-styled {
  circle {
    fill: red;
    stroke: black;
  }
}
.svg-group {
  .group1 {
    opacity: .2;
  }
}
</style>
