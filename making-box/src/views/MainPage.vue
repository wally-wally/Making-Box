<template>
  <div class="main-wrapper">
    <img src="../assets/images/main.png" alt="main-image" @click="googleLogin">
  </div>
</template>

<script>
export default {
  methods: {
    googleLogin() {
      this.$store.dispatch('googleLogin')
    }
  }
}
</script>

<style scoped>
.main-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  margin: 0 10px;
  width: 300px;
  transform: translateX(30px);
  filter: brightness(60%);
  animation: flicker 1s linear alternate infinite;
}

img:hover {
  cursor: pointer;
}

@media (max-width: 600px) {
  img {
    width: 250px;
  }
}

@keyframes flicker {
  0% {
    filter: brightness(60%);
  }

  100% {
    filter: brightness(100%);
  }
}
</style>