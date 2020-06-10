<template>
  <div class="input-name-wrapper">
    <div class="input-box">
      <div class="alert-message">이름을 작성해주세요.</div>
      <div class="input-wrapper">
        <input type="text" v-model="name" placeholder="이름">
        <i class="fas fa-caret-square-right" @click="goBoxChoice"></i>
      </div>
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
.input-name-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.alert-message {
  margin-bottom: 30px;
  font-size: 22px;
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
  margin: 0 6px;
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