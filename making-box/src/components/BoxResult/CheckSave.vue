<template>
  <div class="check-save-wrapper">
    <div class="message-wrapper">
      <div>해당 이미지의 기록을</div>
      <div>다른 사람들과 함께</div>
      <div>남기시겠습니까?</div>
    </div>
    <div class="btn-group">
      <div class="save-btn" @click="goSharePage">Yes</div>
      <div class="no-save-btn" @click="goMain">No</div>
    </div>
  </div>
</template>

<script>
import FirebaseService from '@/api/index.js'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['username', 'email', 'boxName', 'boxType', 'tool', 'decorateSize', 'decorateCount', 'imgIdx'])
  },
  methods: {
    goMain() {
      this.$store.commit('resetData')
    },
    async goSharePage() {
      const boxData = {
        'username': this.username,
        'email': this.email,
        'boxName': this.boxName,
        'boxType': this.boxType,
        'tool': this.tool,
        'decorateSize': this.decorateSize,
        'decorateCount': this.decorateCount,
        'imgIdx': this.imgIdx
      }
      await FirebaseService.postBox(boxData)
      setTimeout(() => {
        this.$router.push('/result/boxshare')
      }, 500)
    }
  }
}
</script>

<style scoped>
.check-save-wrapper,
.message-wrapper,
.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.check-save-wrapper {
  flex-direction: column;
  height: 100vh;
}

.message-wrapper {
  flex-wrap: wrap;
}

.message-wrapper > div {
  margin: 5px;
}

.btn-group > div {
  border: 1px solid silver;
  border-radius: 10px;
  padding: 6px 12px;
  background-color: rgb(255, 221, 111);
  color: #333;
  margin: 20px 10px;
  text-align: center;
  transition: all .2s;
}

.btn-group > div:hover {
  cursor: pointer;
  box-shadow: 2px 2px 4px #888;
}
</style>