<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { Moon, Sunny } from '@element-plus/icons-vue'
import Home from './Home.vue';
const darkMode = ref("dark")

</script>

<template>
  <html :class="darkMode">
  <div class="common-layout">
    <el-container>

      <el-header>
        <el-menu mode="horizontal">
          <el-menu-item index="0">
            <el-icon size="30">
              <RouterLink to="/">
                <Sunrise />
              </RouterLink>
            </el-icon>
          </el-menu-item>

          <el-menu-item index="1">
            <RouterLink to="/projects">项目</RouterLink>
          </el-menu-item>
          <el-menu-item index="2"><el-switch v-model="darkMode" active-value="dark" inactive-value="light" inline-prompt
              active-icon="Sunny" inactive-icon="Moon"></el-switch>
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <RouterView></RouterView>
      </el-main>
      <el-footer>
        <el-empty description="别来无恙啊！" />
      </el-footer>
    </el-container>
  </div>

  </html>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}


html.dark .el-menu {
  background-color: #1f1f1f;
  color: #ffffff;
}

html.dark .el-menu-item {
  color: #ffffff;
}

html.dark .el-menu-item:hover {
  background-color: #333;
}

html.dark .el-menu-item.is-active {
  background-color: #007bff;
}
</style>
