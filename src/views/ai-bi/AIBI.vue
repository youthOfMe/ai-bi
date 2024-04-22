<template>
  <el-card>
    <el-text class="mx-1" type="primary">智慧BI</el-text>
  </el-card>
  <el-row :gutter="20" class="content">
    <el-col :span="12">
      <el-card>
        <template #header>
          <el-text class="mx-1" type="primary">智能分析</el-text>
        </template>
        <el-form label-width="auto" :model="formResearchChart" style="margin-top: 10px">
          <el-form-item label="分析目标">
            <el-input v-model="formResearchChart.goal" type="textarea" />
          </el-form-item>
          <el-form-item label="图标名称">
            <el-input v-model="formResearchChart.name" />
          </el-form-item>
          <el-form-item label="图表类型">
            <el-select
              v-model="formResearchChart.chartType"
              placeholder="Select"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="分析图表">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="#"
              :http-request="handleUpload"
              :limit="1"
              :on-exceed="handleExceed"
            >
              <el-button type="primary">Click to upload</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :loading="isLoading">提交</el-button>
            <el-button :disabled="isDisable" @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card v-loading="isLoading">
        <template #header>
          <el-text class="mx-1" type="primary">分析结论</el-text>
        </template>
        <p>{{ chartData }}</p>
      </el-card>
      <el-card style="margin-top: 10px" v-loading="isLoading">
        <template #header>
          <el-text class="mx-1" type="primary">可视化图表</el-text>
        </template>
        <div class="map" ref="map"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import { genChartByAiUsingPOST } from '@/api'
import { ElMessage } from 'element-plus'

const formResearchChart = reactive({
  goal: '',
  name: '',
  chartType: '',
})

const options = [
  { value: '折线图', label: '折线图' },
  { value: '柱状图', label: '柱状图' },
  { value: '堆叠图', label: '堆叠图' },
  { value: '饼图', label: '饼图' },
  { value: '雷达图', label: '雷达图' },
]

// 图片上传
const fileList = ref([])

let fd = new FormData()
const handleUpload = async (file) => {
  fd.append('file', file.file)
  // 这里是请求上传接口
  console.log(fd)
}

// 获取图表分析数据
const chartData = ref('')
const chartOptions = ref('')

// 挂载分析数据表
const map = ref()
let myChart = ''
onMounted(() => {
  myChart = echarts.init(map.value)
})

// 控制加载状态
const isLoading = ref(false)
// 控制禁用状态
const isDisable = ref(false)

// 重置表单数据
const resetForm = () => {
  formResearchChart.goal = ''
  formResearchChart.name = ''
  formResearchChart.chartType = ''
}

// 上传超出
const handleExceed = () => {
  ElMessage.error('一次只能上传一个图表文件')
}

// 发送网络请求
const onSubmit = async () => {
  isLoading.value = true
  isDisable.value = true
  try {
    const res = await genChartByAiUsingPOST(formResearchChart, fd)

    if (!res?.data) {
      ElMessage.error('分析失败')
      isLoading.value = false
      isDisable.value = false
    } else {
      ElMessage.success('分析成功')
      // myChart.setOption([])
      const chartOption = JSON.parse(res.data.genChart ?? '')
      if (!chartOption) {
        throw new Error('图表代码解析错误')
      } else {
        isLoading.value = false
        isDisable.value = false
        chartData.value = res.data.genResult
        chartOptions.value = chartOption
        // setChart(res.data)
        // setOption(chartOption)
        myChart.setOption(chartOptions.value)
      }
    }
  } catch (e: any) {
    ElMessage.error('分析失败，' + e.message)
  }
}
</script>

<style scoped lang="scss">
.content {
  margin-top: 10px;
  .map {
    height: 500px;
  }
}
</style>
onMounted,, onMounted
