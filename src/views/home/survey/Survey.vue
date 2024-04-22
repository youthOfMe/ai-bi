<template>
  <el-row :gutter="15">
    <el-col :span="18">
      <el-card>
        <div slot="header" class="clearfix">
          <span>用户新增</span>
        </div>
        <div ref="userAddRef" class="user_data" style="height: 250px"></div>
      </el-card>
    </el-col>
    <el-col :span="6" style="height: 312px">
      <el-card class="box-card" style="height: 312px">
        <template #header>
          <div class="card-header">
            <span>平台公告</span>
            <el-button class="button" text type="primary">更多公告</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </el-card>
    </el-col>
  </el-row>
  <data-b></data-b>
  <el-row :gutter="15" style="margin-top: 15px">
    <el-col :span="12">
      <progress-vue></progress-vue>
      <task-vue></task-vue>
    </el-col>
    <el-col :span="12">
      <work-bench></work-bench>
    </el-col>
  </el-row>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, watch } from 'vue'
import useEchart from '@/hooks/useEchart'
import DataB from './cpns/DataB.vue'
import ProgressVue from './cpns/ProgressVue.vue'
import TaskVue from './cpns/TaskVue.vue'
import WorkBench from './cpns/WorkBench.vue'

const props = defineProps({
  echartDatas: {
    type: Array,
    default: () => {
      return []
    },
  },
})

const userAddRef = ref(null)
const hyEchart = ref(null)

const resizeObserver = new ResizeObserver(() => {
  if (userAddRef.value) {
    // setupEchart(props.echartDatas)
  }
})

watch(
  () => props.echartDatas,
  (newV, oldV) => {
    setupEchart(newV)
  },
)

// watch(userAddRef, () => {
//     if (chartInstance) {
//         chartInstance.dispose()
//         chartInstance = null
//     }
//     createChart()
// })
onMounted(() => {
  setupEchart(props.echartDatas)
  resizeObserver.observe(userAddRef.value)
})

const setupEchart = (echartDatas) => {
  if (!hyEchart.value) hyEchart.value = useEchart(userAddRef.value)
  const option = getOption(echartDatas)
  hyEchart.value.setOption(option)
}

const getOption = () => {
  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)',
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)',
            },
          ]),
        },
      },
    ],
  }

  return option
}
</script>

<style lang="less" scoped>
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
  font-weight: bold;
  font-size: 18px;
}
</style>
