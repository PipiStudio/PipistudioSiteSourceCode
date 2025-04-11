<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import { Moon, Sunny } from '@element-plus/icons-vue'
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
          <el-menu-item index="2">
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
        <el-divider />
        <el-empty description="别来无恙啊！" />
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>


</style>