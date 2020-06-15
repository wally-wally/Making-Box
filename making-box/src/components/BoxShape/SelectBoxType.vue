<template>
  <div class="wrapper">
    <div class="select-box-contents">
      <div class="box-choice-title"><span>"원하는 박스 모양을</span><span>선택하세요."</span></div>
      <div class="box-sample-wrapper">
        <img src="../../assets/images/sample/01.png" alt="sample-01" @click="saveBoxType('cylinder')">
        <img src="../../assets/images/sample/02.png" alt="sample-02" @click="saveBoxType('cube')">
      </div>
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
.box-choice-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 6px;
  font-size: calc(1.1rem + 0.5vw);
}

.box-choice-title > span:first-child {
  padding: 0 12px;
}

img {
  display: inline-block;
  width: 300px;
  margin: 15px;
  transition: all .2s;
}

img:hover {
  cursor: pointer;
  transform: scale(1.1);
}

@media (max-width: 450px) {
  img {
    width: 60%;
  }
}
</style>