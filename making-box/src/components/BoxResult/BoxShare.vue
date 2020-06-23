<template>
  <div class="box-share-wrapper">
    <div class="box-contents" v-if="boxData.length">
      <div class="box" v-for="box in boxData" :key="box.boxIdx">
        <img :src="imgUrl(box)" alt="box-image">
        <div class="user-name">{{ box.boxName }}</div>
      </div>
    </div>
    <div class="box-contents alert-message" v-else>
      <p>데이터를 불러오는 중입니다.</p>
    </div>
    <div class="go-main" v-if="boxData.length" @click="goMain">
      메인으로
    </div>
  </div>
</template>

<script>
import FirebaseService from '@/api/index.js'

export default {
  data() {
    return {
      boxData: []
    }
  },
  created() {
    this.getBoxes()
  },
  methods: {
    async getBoxes() {
      const data =  await FirebaseService.getBoxes()
      this.boxData = data.slice(0, 9)
    },
    imgUrl(boxData) {
      return require(`../../assets/images/box/${boxData.boxType}/${boxData.tool}/${boxData.decorateSize}/${boxData.decorateCount}/${boxData.imgIdx}.png`)
    },
    goMain() {
      this.$store.commit('resetData')
    },
  }
}
</script>

<style scoped>
.box-share-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box-contents {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.box-contents.alert-message {
  display: block;
}

.box {
  text-align: center;
}

.box img {
  width: 200px;
  height: 200px;
}

.box .user-name,
.box-contents p {
  text-align: center;
}

.box .user-name {
  margin-top: 10px;
}

.go-main {
  margin-top: 30px;
  width: 120px;
  padding: 6px 12px;
  border: 3px solid silver;
  border-radius: 10px;
  background-color: rgb(255, 221, 111);
  color: #333;
  text-align: center;
  transition: all .2s;
}

.go-main:hover {
  cursor: pointer;
  box-shadow: 2px 2px 4px #888;
}

@media (max-width: 700px) {
  .box-share-wrapper,
  .box-contents {
    display: block;
  }

  .go-main {
    margin: 30px auto;
  }
}
</style>