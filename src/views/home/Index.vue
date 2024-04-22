<template>
  <div>
    <h1>这是主页</h1>
  </div>
</template>

<script setup lang="ts">
// 引入挂载后生命周期
import { onMounted } from 'vue'

// 引入用户数据仓库
import { useUserStore } from '@/store'

// 获取用书数据仓库
const userStore = useUserStore()

// 首页挂载完毕后发请求 请求用户信息
onMounted(() => {
  userStore.fetchUserName()
})
</script>

<style scoped></style>
