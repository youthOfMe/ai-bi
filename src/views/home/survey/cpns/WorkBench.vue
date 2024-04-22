<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>主机监控</span>
        <el-button class="button" text type="primary" @click="goMonitorDetail">更多</el-button>
      </div>
    </template>
    <el-row :gutter="5" class="body">
      <el-col :span="6">
        <el-progress type="circle" :percentage="0">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="25">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="70" status="warning">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="100" status="exception">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="6">
        <el-statistic title="Daily active users" :value="268500" />
      </el-col>
      <el-col :span="6">
        <el-statistic :value="138">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Ratio of men to women
              <el-icon style="margin-left: 4px" :size="12">
                <Male />
              </el-icon>
            </div>
          </template>
          <template #suffix>/100</template>
        </el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="Total Transactions" :value="172000" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="Feedback number" :value="562">
          <template #suffix>
            <el-icon style="vertical-align: -0.125em">
              <ChatLineRound />
            </el-icon>
          </template>
        </el-statistic>
      </el-col>
    </el-row>
    <el-row :gutter="5" class="body" style="margin-top: 15px">
      <el-col :span="6">
        <el-progress type="circle" :percentage="0">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="25">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="70" status="warning">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
      <el-col :span="6">
        <el-progress type="circle" :percentage="100" status="exception">
          <template #default="{ percentage }">
            <span class="percentage-value">{{ percentage }}%</span>
            <span class="percentage-label">内存占用</span>
          </template>
        </el-progress>
        <p>香港神机-ID:5</p>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="6">
        <el-statistic title="Daily active users" :value="268500" />
      </el-col>
      <el-col :span="6">
        <el-statistic :value="138">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Ratio of men to women
              <el-icon style="margin-left: 4px" :size="12">
                <Male />
              </el-icon>
            </div>
          </template>
          <template #suffix>/100</template>
        </el-statistic>
      </el-col>
      <el-col :span="6">
        <el-statistic title="Total Transactions" :value="172000" />
      </el-col>
      <el-col :span="6">
        <el-statistic title="Feedback number" :value="562">
          <template #suffix>
            <el-icon style="vertical-align: -0.125em">
              <ChatLineRound />
            </el-icon>
          </template>
        </el-statistic>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goMonitorDetail = () => router.push('/workbench/detail/13')
</script>

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
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.el-col {
  text-align: center;
}
</style>
