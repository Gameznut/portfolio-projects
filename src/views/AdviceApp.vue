<template>
  <div class="body">
    <div class="contain">
      <div class="contained">
        <h1>Advice # {{ result.id }}</h1>
        <p>
          {{ result.advice }}
        </p>
        <div class="img">
          <img src="../assets/images/pattern-divider-desktop.svg" alt="" />
        </div>
        <div class="mobile">
          <img src="../assets/images/pattern-divider-mobile.svg" alt="" />
        </div>
        <button @click="getAdvice">
          <div>
            <img src="../assets/images/icon-dice.svg" alt="" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
onMounted(async () => {
  const { data } = await axios(url);
  result.value = data.slip;
});
const url = "https://api.adviceslip.com/advice";
const result = ref("");
const getAdvice = async () => {
  const { data } = await axios(url);
  result.value = data.slip;
};
</script>

<style>
@import url('../assets/advice.css');

</style>