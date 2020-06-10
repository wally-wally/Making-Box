<template>
  <div class="box-choice-wrapper">
    <div class="box-choice-title">"원하는 박스 모양을 선택하세요."</div>
    <div class="box-sample-wrapper">
      <img src="../../assets/images/sample/01.png" alt="sample-01" @click="saveBoxType('cylinder')">
      <img src="../../assets/images/sample/02.png" alt="sample-02" @click="saveBoxType('cube')">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    saveBoxType(boxNum) {
      this.$store.commit('saveBoxType', boxNum)
      this.$router.push('/box/name')
    }
  }
}
</script>

<style scoped>
.box-choice-wrapper {
  text-align: center;
}

.box-choice-title {
  margin-bottom: 6px;
}

img {
  max-width: 400px;
  margin: 15px;
  transition: all .2s;
}

img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>