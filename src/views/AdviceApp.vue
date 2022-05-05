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
.body {
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 28px;
  background-color: var(--Dark-Blue);
  height: 100vh;
  width: 100vw;
}

img {
  width: 100%;
  height: 100%;
}

.contain {
  height: 100vh;
  display: flex;
  width: 100%;
}

.contained {
  background-color: var(--Dark-Grayish-Blue);
  max-width: 500px;
  width: 100%;
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  margin: auto;
  box-shadow: 1px 2px 30px 9px rgb(23, 31, 32);
}

h1 {
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  color: var(--Neon-Green);
}

p {
  margin: 1.3rem 0 0;
  color: var(--Light-Cyan);
  text-align: center;
  height: max-content;
}

button {
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: var(--Neon-Green);
  opacity: 0.9;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, 50%);
  outline: none;
  border: none;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 0 9px 10px var(--Neon-Green);
  opacity: 1;
}

.img {
  padding: 1.2rem 0;
}
.mobile {
  display: none;
}

@media screen and (max-width: 728px) {
  .container {
    padding: 1rem;
  }
  .mobile {
    display: block;
    padding: 2rem 0;
  }

  .img {
    display: none;
  }
}
</style>