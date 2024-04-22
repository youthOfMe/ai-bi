<template>
  <div
    class="logo"
    style="
      font-size: 20px;
      font-family: 'Times New Roman';
      text-align: center;
      color: #ffffff;
      background-color: rgb(16 142 233);
      font-style: italic;
      line-height: 50px;
    "
  >
    <span>Wind</span>
  </div>
</template>

<script setup lang="ts">
// 引入设置标题与logo的配置文件
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo {
  box-sizing: border-box;
  height: 50px;
  background: rgb(255 255 255 / 30%);
}
</style>
