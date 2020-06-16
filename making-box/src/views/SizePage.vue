<template>
  <div class="wrapper">
    <div class="alert">{{ alert[this.$store.state.tool] }}</div>
    <div class="select-size">
      <div class="select-title">{{ title[this.$store.state.tool] }}</div>
      <div class="size-images">
        <img src="../assets/images/hole.png" alt="small-size">
        <img src="../assets/images/hole.png" alt="big-size">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: {
        'awl': '"박스에 구멍을 1~5개 뚫을 수 있어요."',
        'saw': '"박스에 스크래치를 1~5개 낼 수 있어요."',
        'sticker': '"박스에 스티커를 1~5개 붙일 수 있어요."'
      },
      title: {
        'awl': '<구멍 크기 설정>',
        'saw': '<스크래치 길이 설정>',
        'sticker': '<스티커 크기 설정>'
      }
    }
  },
}
</script>

<style scoped>
.alert {
  margin-bottom: 15px;
  font-size: 20px;
}

.select-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
  font-size: calc(1.1rem + 0.5vw);
}

.size-images img {
  display: block;
  margin: 10px auto;
  padding: 15px;
  transition: all .2s;
}

.size-images img:first-child {
  width: 48px;
}

.size-images img:hover {
  cursor: pointer;
  transform: scale(0.8);
  filter: brightness(0.5);
}
</style>