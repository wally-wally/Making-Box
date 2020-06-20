<template>
  <div class="wrapper">
    <div class="select-box-contents">
      <div class="box-choice-title"><span>"원하는 박스 모양을</span><span>선택하세요."</span></div>
      <div class="box-sample-wrapper">
        <img src="../../assets/images/boxtype/cube.png" alt="cube" @click="saveBoxType('cube')">
        <img src="../../assets/images/boxtype/cylinder.png" alt="cylinder" @click="saveBoxType('cylinder')">
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
  width: 200px;
  height: 200px;
  margin: 15px;
  filter: drop-shadow(2px 2px 4px black);
  transition: all .2s;
}

img:hover {
  cursor: pointer;
  transform: scale(1.1);
  opacity: 0.6;
}

@media (max-width: 450px) {
  img {
    width: 60%;
  }
}
</style>