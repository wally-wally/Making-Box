<template>
  <div class="box-random-wrapper">
    <img :src="randomBoxImage()" alt="random-box">
    <div class="btn-group">
      <div class="random-btn" @click="randomIdx">랜덤 돌리기</div>
      <div class="desicion-btn" @click="saveImage">결정</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      idx: 1
    }
  },
  computed: {
    ...mapState(['boxType', 'tool', 'decorateSize', 'decorateCount'])
  },
  methods: {
    randomIdx() {
      let min = 1
      let max = 5
      this.idx = Math.floor(Math.random() * (max - min + 1) + min)
    },
    randomBoxImage() {
      return require(`../../assets/images/box/${this.boxType}/${this.tool}/${this.decorateSize}/${this.decorateCount}/${this.idx}.png`)
    },
    saveImage() {
      this.$store.commit('saveImgIdx', this.idx)
      this.$router.push('/result/checksave')
    }
  }
}
</script>

<style scoped>
.box-random-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

img {
  max-width: 400px;
  width: 100%;
}

.btn-group > div {
  border: 1px solid silver;
  border-radius: 10px;
  padding: 6px 12px;
  background-color: rgb(255, 221, 111);
  color: #333;
  margin: 20px 0;
  text-align: center;
  transition: all .2s;
}

.btn-group > div:hover {
  cursor: pointer;
  box-shadow: 2px 2px 4px #888;
}
</style>