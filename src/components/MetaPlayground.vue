<template>
  <div class="page-container">
    <h1>Meta Playground</h1>
    <p>Explore various approaches to meta-learning and optimization algorithms!</p>
    <div id="tester"></div>
  </div>
</template>


<script lang="js">
import { defineComponent, onMounted, ref } from 'vue';
import Plotly from 'plotly.js-dist';

export default defineComponent({
  name: 'MetaPlayground',
  setup() {
    const count = ref(0);

    onMounted(() => {
      const TESTER = document.getElementById('tester');
      var data = [{
        z: [[10, 10.625, 12.5, 15.625, 20],
            [5.625, 6.25, 8.125, 11.25, 15.625],
            [2.5, 3.125, 5., 8.125, 12.5],
            [0.625, 1.25, 3.125, 6.25, 10.625],
            [0, 0.625, 2.5, 5.625, 10]],
        x: [-9, -6, -5 , -3, -1],
        y: [0, 1, 4, 5, 7],
        type: 'contour',
        line:{
          smoothing: 0.85
        },
      }];

      var layout = {
        title: {
          text: 'Optimisation space'
        }
      };

      Plotly.newPlot(TESTER, data, layout, { responsive: true });
    });

    return {
      count
    }
  }
});

</script>

<style scoped>
.page-container {
  margin: 2em 0em 2em 0;
  padding: 1em;
  background-color: white;
  border-radius: 10px;
}

h1 {
  margin:0;
  color: #42b983;
}
</style>
