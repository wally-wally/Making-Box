<template>
  <div class="wrapper">
    <div class="input-box">
      <div class="alert-message">이름을 작성해주세요.</div>
      <form class="input-wrapper" @submit.prevent="goBoxChoice">
        <input type="text" v-model="name" placeholder="이름">
        <i class="fas fa-caret-square-right" type="submit" @click="goBoxChoice"></i>
      </form>
      <div v-if="clicked" class="warning-message">이름을 1자 이상 작성해주세요.</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      clicked: false
    }
  },
  methods: {
    goBoxChoice() {
      if (this.name.length === 0) {
        this.clicked = true
        return
      }
      this.$store.commit('saveBoxName', this.name)
      this.$router.push('/box/choice')
    }
  }
}
</script>

<style scoped>
.alert-message {
  margin-bottom: 30px;
  font-size: calc(1.1rem + 0.5vw);
}

.input-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 6px;
}

input {
  padding: 8px;
  font-size: 15px;
  margin-right: 10px;
  background-color: #333;
  border: transparent;
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  width: 220px;
  color: #eee;
}

i {
  font-size: 24px;
}

i:hover {
  cursor: pointer;
}

.warning-message {
  font-family: 'Gothic A1';
  font-weight: 600;
  font-size: 16px;
  color: rgb(248, 114, 141);
}
</style>