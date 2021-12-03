<template>
  <div class="component__inside">
    <example-component />
  </div>
  
  <div class="component__outside">
    <h2>
      uiState outside Component: {{ uiState}}
    </h2>
    
    Why is the example component not updated by the button below?<br />
    <button @click="uiState = 'Changed outside component'">Change outside component</button>
  </div>
  
  <div class="information">
    The repository of this demo can be found on: <a href="https://github.com/mmeester/component-composable-demo">https://github.com/mmeester/component-composable-demo</a><br />
    The repository of the npm package can be found on: <a href="https://github.com/mmeester/component-composable">https://github.com/mmeester/component-composable</a>
  </div>
</template>

<script setup>
import { useExampleComposable } from 'component-composable';

// why is this a different ui state than the state inside <example-component />?
const { uiState } = useExampleComposable();
</script>

<style>
.component__inside,
.component__outside,
.information {
  padding: 0.5rem;
}

.component__inside { 
  border: 1px solid red;
  margin-bottom: 1rem;
}

.component__outside {
  border: 1px solid green;
  margin-bottom: 3rem;
}

.information { 
  border: 1px solid black;
}
</style>
