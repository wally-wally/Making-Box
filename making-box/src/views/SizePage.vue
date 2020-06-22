<template>
  <div class="wrapper">
    <div class="decorate-size">
      <div class="decorate-size-title">{{ sizeTitle[this.$store.state.tool] }}</div>
      <div class="size-images">
        <img :src="decorateImgFile()" alt="small-size" @click="saveDecorateSize('small')">
        <img :src="decorateImgFile()" alt="large-size" @click="saveDecorateSize('large')">
      </div>
    </div>
    <div class="decorate-count">
      <div class="decorate-count-title">{{ countTitle[this.$store.state.tool] }}</div>
      <form class="input-wrapper" @submit.prevent="goMakingPage">
        <input type="number" min="1" max="4" v-model.number="decorateCount" placeholder="1~4 사이 숫자를 입력하세요">
        <div class="go-make-btn" @click="goMakingPage">제작된 박스 확인하기</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countTitle: {
        'awl': '"박스에 구멍을 1~4개 뚫을 수 있어요."',
        'saw': '"박스에 스크래치를 1~4개 낼 수 있어요."',
        'sticker': '"박스에 스티커를 1~4개 붙일 수 있어요."'
      },
      sizeTitle: {
        'awl': '<구멍 크기 설정>',
        'saw': '<스크래치 길이 설정>',
        'sticker': '<스티커 크기 설정>'
      },
      imgFileName: {
        'awl': 'hole',
        'saw': 'scratch',
        'sticker': 'sticker'
      },
      decorateCount: ''
    }
  },
  methods: {
    decorateImgFile() {
      return require(`../assets/images/decorate/${this.imgFileName[this.$store.state.tool]}.png`)
    },
    saveDecorateSize(size) {
      this.$store.commit('saveDecorateSize', size)
      document.querySelector('.decorate-size').style.display = 'none'
      document.querySelector('.decorate-count').style.display = 'block'
    },
    goMakingPage() {
      if (this.decorateCount === '' || !(this.decorateCount >= 1 && this.decorateCount <= 4)) {
        alert('1에서 4 사이의 숫자를 입력해주세요.')
        return
      }
      this.$store.commit('saveDecorateCount', this.decorateCount)
      this.$router.push('/result/random')
    }
  },
  watch: {
    decorateCount: {
      handler(newValue, oldValue) {
        if (newValue !== '' && !(newValue >= 1 && newValue <= 4)) {
          alert('1에서 4 사이의 숫자를 입력해주세요.')
          this.decorateCount = oldValue
        }
      }
    }
  }
}
</script>

<style scoped>
.decorate-size-title,
.decorate-count-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
}

.decorate-size-title {
  font-size: calc(1.1rem + 0.5vw);
}

.decorate-count-title {
  font-size: calc(0.8rem + 0.4vw);
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

.input-wrapper {
  margin-bottom: 6px;
}

input {
  padding: 8px;
  font-size: 15px;
  background-color: #333;
  border: transparent;
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  width: 220px;
  color: #eee;
}

.go-make-btn {
  width: 180px;
  margin: 20px auto 0;
  font-size: 16px;
  border: 1px solid silver;
  padding: 6px 2px;
  border-radius: 10px;
  background-color: antiquewhite;
  color: #333;
  transition: all .2s;
}

.go-make-btn:hover {
  cursor: pointer;
  box-shadow: 2px 2px 4px #888;
}

.decorate-count {
  display: none;
}
</style>