<!-- ChildComp.vue -->
<script setup>
import {ref} from 'vue'
const type = ref("primary")
const input = ref("别着急，Aaron还在修改网站！qwq")
function switchColor() {
  type.value = type.value == "primary" ? "danger" : "primary"
}
</script>
<template>

  <el-row justify="center">
    <el-card shadow="hover">
      <p>{{ input }}</p>
      <el-input v-model="input" style="width: 240px" placeholder="一个输入框..." type="textarea" rows="3" />
    </el-card>
  </el-row>
  <el-row justify="center">
    <el-button :type="type" @click="switchColor" plain>{{ input }}</el-button>
    <el-button :type="type" @click="switchColor" plain>{{ input }}</el-button>
  </el-row>
  <el-row justify="center">
    <el-button :type="type" @click="switchColor" plain>{{ input }}</el-button>
    <el-button :type="type" @click="switchColor" plain>{{ input }}</el-button>
  </el-row>



</template>
<style scoped>

</style>