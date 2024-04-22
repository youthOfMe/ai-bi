<template>
  <el-card>我的图表</el-card>
  <el-card style="margin-top: 10px">
    <template #header>
      <el-input v-model="input3" placeholder="Please input" class="input-with-select">
        <template #prepend>
          <el-select v-model="select" placeholder="Select" style="width: 115px">
            <el-option label="Restaurant" value="1" />
            <el-option label="Order No." value="2" />
            <el-option label="Tel" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </template>
    <el-table :data="chartList" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="chartType" label="图表类型" />
      <el-table-column prop="goal" label="目标" />
      <el-table-column prop="genResult" label="结论" :show-overflow-tooltip="true" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column prop="updateTime" label="更新时间" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="displayChart(scope.$index, scope.row)">more</el-button>
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-card style="margin-top: 10px">
    <div class="chart" ref="chart" style="height: 500px"></div>
  </el-card>
  <!-- <el-dialog v-model="chartVisible" title="图表数据" width="500" center append-to-body>
    <el-card>
      <div class="chart" ref="chart" style="width: 500px; height: 500px"></div>
    </el-card>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="chartVisible = false">Cancel</el-button>
        <el-button type="primary" @click="chartVisible = false">Confirm</el-button>
      </div>
    </template>
  </el-dialog> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getListMyChartByPageUsingPOST } from '@/api'
import { ElMessage } from 'element-plus'
import * as echarts from 'echarts'
import { Search } from '@element-plus/icons-vue'
import { watch } from 'vue'

// 显示图表数据
const chartList = ref([])

// 发送网络请求
const searchParams = ref({
  current: 1,
  pageSize: 4,
  sortField: 'create_time',
  sortOrder: 'desc',
})
const loadData = async () => {
  // setLoading(true)
  try {
    const res = await getListMyChartByPageUsingPOST(searchParams.value)
    if (res.data) {
      chartList.value = res.data.records ?? []
      // setTotal(res.data.total ?? 0)
      // 隐藏图表的 title
      if (res.data.records) {
        res.data.records.forEach((data) => {
          if (data.status === 'succeed') {
            const chartOption = JSON.parse(data.genChart ?? '{}')
            chartOption.title = undefined
            data.genChart = JSON.stringify(chartOption)
          }
        })
      }
    } else {
      ElMessage.error('获取我的图表失败')
    }
  } catch (e: any) {
    ElMessage.error('获取我的图表失败，' + e.message)
  }
  // setLoading(false)
}

// 显示更多图表数据
const chartVisible = ref(false)
const chart = ref()
let myChart = ''
const chartOptions = ref('')
const displayChart = (index, data) => {
  myChart.setOption({})
  chartVisible.value = true
  const chartOption = JSON.parse(data.genChart ?? '{}')
  chartOptions.value = chartOption
  myChart.setOption(chartOptions.value)
}

// 初始化数据
onMounted(() => {
  loadData()
  myChart = echarts.init(chart.value)
})
</script>

<style scoped lang="scss"></style>
