<template>
  <div class="main-wrapper">
    <img src="../assets/images/main.png" alt="main-image" @click="googleLogin">
  </div>
</template>

<script>
export default {
  methods: {
    googleLogin() {
      if (this.$store.state.token) {
        this.$router.push('/inputname')
      } else {
        this.$store.dispatch('googleLogin')
      }
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
  filter: drop-shadow(2px 2px 4px black);
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
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}
</style>