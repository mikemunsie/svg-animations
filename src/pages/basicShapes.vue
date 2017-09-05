<template>
  <div class="page-index">
    <h1>Basic Shapes</h1>
    <div class="sections">
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

      <div class="section">
        <p>SVG Group Animation</p>
        <svg viewBox="0 0 20 20" class="svg-group-animation">
          <g class="group1">
            <circle fill="black" stroke="gray" cx="10" cy="10" r="9" />
            <circle fill="gray" stroke="black" cx="10" cy="10" r="7" />
          </g>
          <polygon class="triangle" stroke="black" fill="transparent" stroke-width=".2" points="10,4 5,13 15,13" />
        </svg>
      </div>

      <div class="section">
        <p>SVG Animation with / without adjusted viewBox</p>
        <svg viewBox="0 0 20 20" class="svg-adjusted-viewbox-animation">
          <g class="group1">
            <circle fill="black" stroke="gray" cx="10" cy="10" r="9" />
            <circle fill="gray" stroke="black" cx="10" cy="10" r="7" />
          </g>
          <polygon class="triangle" stroke="black" fill="transparent" stroke-width=".2" points="10,4 5,13 15,13" />
        </svg>
        <svg viewBox="-45 0 65 20" class="svg-adjusted-viewbox-animation">
          <g class="group1">
            <circle fill="black" stroke="gray" cx="10" cy="10" r="9" />
            <circle fill="gray" stroke="black" cx="10" cy="10" r="7" />
          </g>
          <polygon class="triangle" stroke="black" fill="transparent" stroke-width=".2" points="10,4 5,13 15,13" />
        </svg>
      </div>
      <div class="section">
        <p>Once the SVG (Without CSS) animates good, then adjust dimensions</p>
        <svg viewBox="-45 0 65 20" class="svg-adjusted-viewbox-animation adjusted">
          <g class="group1">
            <circle fill="black" stroke="gray" cx="10" cy="10" r="9" />
            <circle fill="gray" stroke="black" cx="10" cy="10" r="7" />
          </g>
          <polygon class="triangle" stroke="black" fill="transparent" stroke-width=".2" points="10,4 5,13 15,13" />
        </svg>
      </div>
      <div class="section">
        <p>Multiple Animations (using nested groups)</p>
        <svg viewBox="-45 0 65 20" class="svg-adjusted-viewbox-animation adjusted withSpin">
          <g class="group1">
            <circle fill="black" stroke="gray" cx="10" cy="10" r="9" />
            <circle fill="gray" stroke="black" cx="10" cy="10" r="7" />
          </g>
          <g class="triangle-parent-container">
            <g class="triangle-container">
              <polygon class="triangle" stroke="black" fill="transparent" stroke-width=".2" points="10,4 5,13 15,13" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicShapes'
}
</script>

<style scoped lang="scss">
.section {
  border: 1px dashed #aaa;
  padding: 15px;
  margin: 15px;
  display: inline-block;
}
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

.svg-adjusted-viewbox-animation {
  .triangle {
    animation: 2s linear 0s infinite move;
  }
  .triangle-parent-container {
    animation: 4s linear 0s infinite opacity;
  }
  &.adjusted {
    width: 350px;
  }
  &.withSpin {
    .triangle {
      animation: 1s linear 0s infinite spin;
    }
    .triangle-container {
      animation: 3s linear 0s infinite move;
    }
  }
}

.svg-group-animation .triangle {
  animation: 2s linear 0s infinite spin;

  // Determine where the center of the triangle is
  transform-origin: 10px 10px 0;
}

@keyframes opacity {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes move {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    fill: #fff;
    stroke-width: .1;
    transform-origin: 10px 10px 0;
  }
  50% {
    transform: rotate(180deg);
    fill: #000;
    stroke: #fff;
    stroke-width: .8;
    transform-origin: 10px 10px 0;
  }
  100% {
    transform: rotate(360deg);
    fill: #fff;
    stroke-width: .1;
    transform-origin: 10px 10px 0;
  }
}

</style>
