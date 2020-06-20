<template>
  <div class="wrapper">
    <div class="select-size">
      <div class="select-title">{{ title[this.$store.state.tool] }}</div>
      <div class="size-images">
        <img :src="decorateImgFile()" alt="small-size">
        <img :src="decorateImgFile()" alt="big-size">
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
      },
      imgFileName: {
        'awl': 'hole',
        'saw': 'scratch',
        'sticker': 'sticker'
      }
    }
  },
  methods: {
    decorateImgFile() {
      return require(`../assets/images/decorate/${this.imgFileName[this.$store.state.tool]}.png`)
    }
  }
}
</script>

<style scoped>
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
  width: 90px;
}

.size-images img:last-child {
  width: 125px;
}

.size-images img:hover {
  cursor: pointer;
  transform: scale(0.8);
  filter: brightness(0.5);
}
</style>