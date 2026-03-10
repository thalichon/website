<template>
  <div class="page-container">
    <div class="header">
      <h1>Meta Playground</h1>
      <p>Explore various approaches to meta-learning and optimization algorithms!</p>
    </div>
    
    <div class="content-grid">
      <div class="graph-container">
        <div id="tester" ref="testerRef"></div>
      </div>
      
      <div class="controls-container">
        <h2>Controls</h2>
        <div class="control-group">
          <label>Function to optimise</label>
          <select id="function-select" aria-label="Select function" @change="changeFunction($event)">
            <option v-for="x in funcs" :funcname="x" >{{ x }}</option>
          </select>
        </div>
        <button class="run-button">Run Optimization</button>
      </div>
    </div>
  </div>
</template>


<script lang="js">
import { defineComponent, onMounted, ref, reactive } from 'vue';
import Plotly from 'plotly.js-dist';
import functions from '../assets/functions.js';

export default defineComponent({
  name: 'MetaPlayground',
  setup() {
    // Template ref for the plot container
    const testerRef = ref(null);

    // Reactive plot state
    const plotData = ref([]);
    const currentFunction = ref('rastrigin');

    // Default layout for the plot
    const layout = reactive({
      title: {
        text: 'Optimisation space'
      },
      showlegend: false,
      xaxis: {
        title: { text: 'Dimension 1' },
        autorange: true,
        showgrid: false,
        zeroline: false,
        showticklabels: false,
        ticks: ''
      },
      yaxis: {
        title: { text: 'Dimension 2' },
        autorange: true,
        showgrid: false,
        zeroline: false,
        showticklabels: false,
        ticks: ''
      }
    });

    // Default config for the plot
    const config = {
      staticPlot: false,
      displayModeBar: false,
      responsive: true
    };

    // Add default options for the contour plot
    const addContourPlotOptions = (obj) => {
      obj.type = 'contour';
      obj.showscale = false;
      obj.logscale = false;
      obj.line = { smoothing: 0.85 };
      return obj;
    };

    // Generates contour data needed by plotly contour plot
    const generateContourData = (func, xDomain, yDomain, logscale, res = 100) => {
      const obj = {
        x: [],
        y: [],
        z: []
      };
      const xStep = (xDomain[1] - xDomain[0]) / res;
      const yStep = (yDomain[1] - yDomain[0]) / res;
      
      for (let j = yDomain[0]; j < yDomain[1]; j += xStep) {
        const row = [];
        obj.y.unshift(j);
        for (let i = xDomain[0]; i < xDomain[1]; i += yStep) {
          let z = func(i, j);
          if(logscale) {
            z = Math.log10(z + 1e-15); // Add small value to avoid log(0)
          }
          row.push(z);
        }
        obj.z.unshift(row);
      }
      for (let i = xDomain[0]; i < xDomain[1]; i += yStep) {
        obj.x.push(i);
      }
      return obj;
    };

    // Initialize the plot with default data
    const initializePlot = () => {
      const funcData = functions[currentFunction.value];
      
      // Create contour plot data
      plotData.value[0] = generateContourData(
        funcData.f,
        funcData.xDomain,
        funcData.yDomain,
        funcData.logscale
      );
      plotData.value[0] = addContourPlotOptions(plotData.value[0]);
      
      // Add scatter plot for optimization points
      plotData.value[1] = {
        x: [],
        y: [],
        mode: 'markers',
        type: 'scatter',
        marker: { color: 'red', size: 5 }
      };

      // Create the plot
      Plotly.newPlot(testerRef.value, plotData.value, layout, config);
    };

    // Update the plot when function changes
    const changeFunction = (e) => {
      const selectedFuncName = e.target.options[e.target.selectedIndex].getAttribute('funcname');
      currentFunction.value = selectedFuncName;
      
      const funcData = functions[selectedFuncName];
      
      // Generate new contour data
      const newContourData = generateContourData(
        funcData.f,
        funcData.xDomain,
        funcData.yDomain,
        funcData.logscale
      );
      addContourPlotOptions(newContourData);
      
      // Update the contour data in the plot
      plotData.value[0] = newContourData;
      
      // Use Plotly.react for efficient update
      Plotly.react(testerRef.value, plotData.value, layout, config);
    };

    // Mount the plot when component is ready
    onMounted(() => {
      initializePlot();
    });

    // Return reactive state and methods
    return {
      testerRef,
      funcs: Object.keys(functions),
      changeFunction,
      generateContourData,
      plotData,
      currentFunction
    };
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
