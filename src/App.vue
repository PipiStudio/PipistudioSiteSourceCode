<script setup>
import { ElButton } from 'element-plus';
import { ref } from 'vue';
const msg = ref("你好，Vue！")
const type = ref("primary")

function switchColor()
{
  type.value = type.value == "primary"?"info":"primary"
}
</script>

<template>
  <header>

  </header>

  <main>
    <el-button :type="type" @click="switchColor" plain="true">{{msg}}</el-button>
  </main>
</template>

<style scoped>

</style>
