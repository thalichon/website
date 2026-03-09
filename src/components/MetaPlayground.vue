<template>
  <div class="page-container">
    <div class="header">
      <h1>Meta Playground</h1>
      <p>Explore various approaches to meta-learning and optimization algorithms!</p>
    </div>
    
    <div class="content-grid">
      <div class="graph-container">
        <div id="tester"></div>
      </div>
      
      <div class="controls-container">
        <h2>Controls</h2>
        <div class="control-group">
          <label>Learning Rate</label>
          <input type="range" min="0" max="1" step="0.01" value="0.1" />
          <span class="value-display">0.1</span>
        </div>
        <div class="control-group">
          <label>Iterations</label>
          <input type="number" min="1" max="10000" value="100" />
        </div>
        <div class="control-group">
          <label>Algorithm</label>
          <select>
            <option>Gradient Descent</option>
            <option>Adam</option>
            <option>RMSprop</option>
          </select>
        </div>
        <button class="run-button">Run Optimization</button>
      </div>
    </div>
  </div>
</template>


<script lang="js">
import { defineComponent, onMounted, ref } from 'vue';
import Plotly from 'plotly.js-dist';

export default defineComponent({
  name: 'MetaPlayground',
  setup() {

    onMounted(() => {
      const TESTER = document.getElementById('tester');
      var data = [{
        z: [[10, 10.625, 12.5, 15.625, 20],
            [5.625, 6.25, 8.125, 11.25, 15.625],
            [2.5, 3.125, 5., 8.125, 12.5],
            [0.625, 100.25, 3.125, 6.25, 10.625],
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

  }
});

</script>

<style scoped>
.page-container {
  margin: 2em 0em 2em 0;
  padding: 1em;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.header {
  margin-bottom: 2em;
}

h1 {
  margin: 0;
  color: #42b983;
}

p {
  margin: 0.5em 0 0 0;
  color: #666;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  flex: 1;
}

.graph-container {
  aspect-ratio: 1 / 1;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fafafa;
}

#tester {
  width: 100%;
  height: 100%;
}

.controls-container {
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 1.5em;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.controls-container h2 {
  margin: 0 0 0.5em 0;
  color: #333;
  font-size: 1.2em;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.control-group label {
  font-weight: 500;
  color: #555;
  font-size: 0.95em;
}

.control-group input,
.control-group select {
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95em;
  font-family: inherit;
}

.control-group input[type="range"] {
  cursor: pointer;
}

.value-display {
  font-size: 0.9em;
  color: #666;
  font-weight: 500;
}

.run-button {
  padding: 0.75em 1.5em;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: auto;
}

.run-button:hover {
  background-color: #369970;
}

.run-button:active {
  transform: scale(0.98);
}
</style>
