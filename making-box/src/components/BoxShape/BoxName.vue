<template>
  <div class="box-name-wrapper">
    <div v-if="clickCount === 0" class="message">이제 이 박스는 <span class="box-name">"{{ this.$store.state.boxName }}"</span> 이에요.</div>
    <div v-else class="message"><span class="box-name">"{{ this.$store.state.boxName }}"</span>을(를) 완벽한 박스로 만들어보아요.</div>
    <div class="next-btn" @click="addClickCount">
      <i class="fas fa-caret-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clickCount: 0
    }
  },
  methods: {
    addClickCount() {
      this.clickCount++
      if (this.clickCount === 2) {
        this.$router.push('/tool/select')
      }
    }
  }
}
</script>

<style scoped>
.box-name-wrapper {
  text-align: center;
}

.box-name {
  font-size: 30px;
}

.next-btn {
  width: 130px;
  margin: 25px auto 0;
  border: 1px solid rgba(136, 136, 136, .6);
  padding: 4px;
  border-radius: 10px;
  transition: all .2s;
}

.next-btn i {
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.next-btn i:after {
  content: 'Next';
  font-size: 18px;
  margin-left: 5px;
}

.next-btn:hover {
  cursor: pointer;
  box-shadow: 3px 3px 5px #555;
  border-color: rgb(136, 136, 136);
}
</style>