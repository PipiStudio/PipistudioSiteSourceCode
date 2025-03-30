<script setup>
import { ref } from 'vue';
import { Moon, Sunny} from '@element-plus/icons-vue'
const darkMode = ref("dark")
const type = ref("primary")
const input = ref("别着急，Aaron还在修改网站！qwq")

function switchColor()
{
  type.value = type.value == "primary"?"danger":"primary"
}
</script>

<template>
  <html :class="darkMode">
    <div class="common-layout">
      <el-container>

        <el-header>
          <el-menu mode="horizontal">
            <el-menu-item index="0">
              <el-icon size="30"><Sunrise /></el-icon>
            </el-menu-item>
            
            <el-menu-item index="1">项目</el-menu-item>
            <el-menu-item index="2"><el-switch v-model="darkMode" active-value="dark" inactive-value="light" inline-prompt active-icon="Sunny" inactive-icon="Moon"></el-switch>
            </el-menu-item>
          </el-menu>
        </el-header>

        <el-main>
          <el-row justify="center">
            <el-card shadow="hover">
              <p>{{ input }}</p>
              <el-input v-model="input" style="width: 240px" placeholder="一个输入框..." type="textarea" rows="3"/>
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
