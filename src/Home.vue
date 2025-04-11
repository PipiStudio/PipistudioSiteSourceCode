<!-- ChildComp.vue -->
<script setup>
import { ref, onMounted } from 'vue'
const type = ref("primary")
const input = ref("别着急，Aaron还在修改网站！qwq")

</script>
<template>

  <transition name="fade" appear>
    <el-row justify="center" :gutter="20">
      <el-col :span="10">
        <el-text type="default" style="font-size: 2.5rem;">我们不是在制作游戏，我们是在创造世界。</el-text>
      </el-col>
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
</template>
<style scoped>

</style>