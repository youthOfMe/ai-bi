<template>
  <el-row :gutter="15" style="margin-top: 15px">
    <el-col :span="6">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>平台员工</span>
            <el-button class="button" text type="primary">更多</el-button>
          </div>
        </template>
        <div class="body">
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)"><Avatar /></el-icon>
            <p>现存员工</p>
            <p>88人</p>
          </div>
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)"><Suitcase /></el-icon>
            <p>在线员工</p>
            <p>88人</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>平台主机</span>
            <el-button class="button" text type="primary">更多</el-button>
          </div>
        </template>
        <div class="body">
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)"><Platform /></el-icon>
            <p>所有主机</p>
            <p>88台</p>
          </div>
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)"><Monitor /></el-icon>
            <p>可用主机</p>
            <p>88台</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>平台项目</span>
            <el-button class="button" text type="primary">更多</el-button>
          </div>
        </template>
        <div class="body">
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)"><List /></el-icon>
            <p>所有项目</p>
            <p>88个</p>
          </div>
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)">
              <DataAnalysis />
            </el-icon>
            <p>进行项目</p>
            <p>88个</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>平台预警</span>
            <el-button class="button" text type="primary">更多</el-button>
          </div>
        </template>
        <div class="body">
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)">
              <BellFilled />
            </el-icon>
            <p>所有预警</p>
            <p>88次</p>
          </div>
          <div>
            <el-icon size="50px" style="color: rgb(16 142 233)"><Phone /></el-icon>
            <p>现存预警</p>
            <p>88个</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
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
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p:nth-child(2) {
      margin: 5px 0 0;
      color: rgb(16 142 233);
    }
    p:nth-child(3) {
      margin: 0;
      width: 50px;
      border-radius: 8px;
      text-align: center;
      color: white;
      background-color: rgb(16 142 233);
    }
  }
}
</style>
