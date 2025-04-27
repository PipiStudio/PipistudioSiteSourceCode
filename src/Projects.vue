<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
</script>

<template>
  <el-row justify="center">
    <el-card style="max-width:fit-content" shadow="hover">
      <template #header>
        <div class="card-header">
          <el-row justify="center">
            <el-text size="large">Aaronic</el-text>
          </el-row>
        </div>
      </template>
    <el-row justify="center">
      Pipistudio制作的第一款游戏，由Aaron独立完成（似乎很生草？）
    </el-row>
    <el-row justify="center">
      <img
        src="./assets/screenshots/aaronic_screenshot.jpg"
        style="width: 75%"
      />
    </el-row>
      <template #footer>
        <el-row justify="center">
          <el-button round @click="ElMessage.error('好吧，事实上Aaron还没搞好这个界面...')">查看</el-button>
        </el-row>
      </template>
    </el-card>
  </el-row>

</template>

<style scoped></style>