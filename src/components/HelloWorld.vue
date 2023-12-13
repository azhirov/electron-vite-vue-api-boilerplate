<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const barLoading = ref(false)
const res = ref('');

const callFooHello = async () => {
  const result = await window.callApi('foo:hello', 'User');
  res.value = JSON.stringify(result, null, 2);
}
const callBarAsyncMethod = async () => {
  barLoading.value = true;
  const result = await window.callApi('bar:asyncMethod');
  res.value = JSON.stringify(result, null, 2);
  barLoading.value = false;
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <div class="buttons">
      <button type="button" @click="callFooHello">foo.hello('User')</button>
      <button type="button" @click="callBarAsyncMethod">
        {{ barLoading ? 'Loading...' : 'bar.asyncMethod'}}
      </button>
    </div>
    <p>
      Result:
    </p>
    <pre><code v-html="res"></code></pre>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.buttons {
  display: flex;
  gap: 8px;
}
</style>
