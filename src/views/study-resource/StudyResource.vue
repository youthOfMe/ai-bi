<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="18">
          <el-input placeholder="请输入内容" v-model="serach">
            <!-- 在模板中会传入时间对象event -->
            <el-button slot="append" icon="el-icon-search" @click="getList(1)"></el-button>
          </el-input>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" @click="showAddForm" class="fr">添加用例</el-button>
          <div class="clear"></div>
        </el-col>
      </el-row>
      <el-table
        :data="documentList"
        style="margin-top: 20px; width: 100%"
        :border="true"
        stripe
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="id" label="用例ID"></el-table-column>
        <el-table-column prop="user_id" label="负责人ID"></el-table-column>
        <el-table-column prop="api_name" label="用例名称"></el-table-column>
        <el-table-column prop="api_desc" label="用例描述"></el-table-column>
        <el-table-column prop="api_url" label="请求URL"></el-table-column>
        <el-table-column prop="get_api_method_display" label="请求方法"></el-table-column>
        <el-table-column prop="api_params" label="请求参数"></el-table-column>
        <el-table-column prop="api_expect" label="预期值"></el-table-column>
        <el-table-column prop="api_report" label="用例报告"></el-table-column>
        <el-table-column prop="get_api_pass_status_display" label="通过状态"></el-table-column>
        <el-table-column prop="get_api_run_status_display" label="是否执行"></el-table-column>
        <el-table-column label="操作" fixed="right" min-width="140px">
          <template #default="{ row }">
            <el-tooltip content66="编辑" placement="bottom" effect="light">
              <el-button :icon="Edit" @click="handleEdit(row.id)"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="bottom" effect="light">
              <el-button type="danger" :icon="Delete" @click="handleDelete(row.id)"></el-button>
            </el-tooltip>
            <el-tooltip content="添加用例" placement="bottom" effect="light">
              <el-button :icon="DocumentAdd" @click="handleEdit(row.id)"></el-button>
            </el-tooltip>
            <el-tooltip content="用例列表" placement="bottom" effect="light">
              <el-button :icon="Document" @click="handleEdit(row.id)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @current-change="getDocumentList"
        :current-page="pagination.page"
        :page-size="pagination.size"
        layout="total, prev, pager, next, jumper"
        :total="pagination.total"
        style="margin-top: 20px"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { reqDocumentList } from '@/api/protest/document/index.js'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

// 获取项目用例列表
const documentList = ref([])
const pagination = ref({
  total: 0,
  page: 1,
  size: 15,
})
// const getDocumentList = (id = 1, page = 1) => {
//   if (typeof page !== 'number' || page <= 0) page = 1
//   reqDocumentList({ id, page }).then((response) => {
//     documentList.value = response.results
//     pagination.value = response.pagination
//   })
// }
// getDocumentList(route.query?.id)
</script>

<style lang="less" scoped></style>
