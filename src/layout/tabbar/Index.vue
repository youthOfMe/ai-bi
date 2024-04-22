<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="tabbar_right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入面包屑组件
import BreadCrumb from './breadCrumb/Index.vue'
// 引入顶部设置栏组件
import Setting from './setting/Index.vue'
</script>

<style scoped lang="scss">
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: #ffffff;
  &_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  &_right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
