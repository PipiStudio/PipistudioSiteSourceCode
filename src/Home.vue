<!-- ChildComp.vue -->
<script setup>

</script>
<template>

  <transition name="fade" appear>
    <el-row justify="center" :gutter="20">
        <el-text type="default" style="font-size: 2.5rem;">我们不是在制作游戏，我们是在创造世界。</el-text>
    </el-row>
  </transition>
  <transition name="fade" appear>
    <el-row justify="center" :gutter="20">
      <el-col :span="12" :offset="12">
        <el-text type="default" style="font-size: 1.5rem; ">
          --托德·霍华德
        </el-text>
      </el-col>
    </el-row>
  </transition>
  <el-carousel indicator-position="outside">
    <el-carousel-item>
      <el-row justify="center">
        <h1>海“内存“知己，天涯若比邻。</h1>
      </el-row>
    </el-carousel-item>
    <el-carousel-item>
      <el-row justify="center">
        <h1>欢迎来到Pipistudio，我们会做世界上最棒的游戏！</h1>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>
<style scoped>
.el-carousel__item h1 {
  display: flex;
  color: #000000;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>