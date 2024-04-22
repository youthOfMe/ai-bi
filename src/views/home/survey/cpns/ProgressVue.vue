<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>主机负载</span>
        <el-button class="button" text type="primary">更多</el-button>
      </div>
    </template>
    <el-row :gutter="5" class="body">
      <el-col :span="6">
        <el-progress type="circle" :percentage="0" />
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="25" />
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="70" status="warning" />
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="100" status="exception" />
        <p>香港神机-ID:5</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup></script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
span {
  font-size: 16px;
  font-weight: bold;
}
.body {
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    p {
      margin: 5px 0 0;
      font-weight: bold;
      color: rgb(16 142 233);
    }
  }
}
</style>
