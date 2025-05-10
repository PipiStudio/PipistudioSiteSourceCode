<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sunny, ArrowDown } from '@element-plus/icons-vue'
import './assets/main.css'
// 使用VueUse的暗黑模式功能
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :ellipsis="false">
          <el-menu-item index="1">
            <el-icon size="30">
              <RouterLink to="/">
                <img class="icon" src="./assets/icon_plain.svg" alt="SVG Image" width="30" height="30">
              </RouterLink>
            </el-icon>
          </el-menu-item>

          <el-menu-item index="2">
            <RouterLink to="/projects">项目</RouterLink>
          </el-menu-item>

          <el-menu-item index="3">
            
              <el-dropdown size="large">
                <span class="el-dropdown-link">
                  联系我们
                  <el-icon class="el-icon--right">
                    <ArrowDown></ArrowDown>
                  </el-icon>
                </span>

                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item><el-link href="https://space.bilibili.com/1095627682" target="_blank">B站账号</el-link></el-dropdown-item>
                    <el-dropdown-item><el-link href="https://github.com/PipiStudio" target="_blank">Github</el-link></el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>

          </el-menu-item>
          <el-menu-item index="4">
            <el-switch 
              :model-value="isDark" 
              @update:model-value="toggleDark()" 
              inline-prompt
              :active-icon="Sunny" 
              :inactive-icon="Moon"
            />
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
      
      <el-footer>
        <el-divider border-style="dashed" />
        <el-row justify="center">
          <el-text size="small">&copy; 2025 Pipistudio</el-text>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(2) {
  margin-right: auto;
}

</style>