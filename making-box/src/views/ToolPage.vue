<template>
  <div class="wrapper">
    <div class="select-tool-contents">
      <div class="select-tool-title">
        <span>완벽한 박스를 만들기 위해</span>
        <span>도구를 선택해주세요.</span>
      </div>
      <ul class="tools">
        <li class="tool">
          <img src="../assets/images/tools/awl.png" alt="awl" @click="saveTool('awl')">
        </li>
        <li class="tool">
          <img src="../assets/images/tools/saw.png" alt="saw" @click="saveTool('saw')">
        </li>
        <li class="tool">
          <img src="../assets/images/tools/sticker.png" alt="sticker" @click="saveTool('sticker')">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    saveTool(tool) {
      this.$store.commit('saveTool', tool)
      this.$router.push('/size')
    }
  }
}
</script>

<style scoped>
.select-tool-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 6px;
  font-size: calc(1.1rem + 0.5vw);
}

.select-tool-title > span:first-child {
  padding: 0 12px;
}

.tools {
  list-style: none;
  padding: 0;
  text-align: center;
}

.tool {
  margin: 20px;
  display: inline-flex;
}

.tool img {
  display: inline-block;
  width: 150px;
  margin: 15px;
  transition: all .2s;
}

.tool img:hover {
  cursor: pointer;
  transform: scale(1.1);
}

@media (max-width: 700px) {
  .tool {
    display: block;
  }
}

@media (max-width: 450px) {
  .wrapper {
    height: 100%;
    margin-top: 2.2rem;
  }
}
</style>