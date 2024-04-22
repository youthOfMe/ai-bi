<template>
  <div class="post">
    <el-tabs type="border-card">
      <el-tab-pane label="我的帖子" class="base-info">
        <el-table :data="postList" border stripe style="width: 100%">
          <el-table-column type="selection" width="55" />
          <el-table-column prop="id" label="帖子ID" />
          <el-table-column prop="categoryName" label="归属板块" />
          <el-table-column prop="title" label="标题" />
          <el-table-column show-overflow-tooltip prop="content" label="内容" width="400" />
          <el-table-column prop="coverUrl" label="封面">
            <template #default="scope">
              <img style="width: 100px; height: 100px" :src="scope.row.coverUrl" />
            </template>
          </el-table-column>
          <el-table-column prop="labels" label="标签" />
          <el-table-column prop="thumb" label="点赞量" />
          <el-table-column prop="commit" label="评论量" />
          <el-table-column prop="share" label="分享量" />
          <el-table-column prop="createdTime" label="创建时间" />
          <el-table-column prop="updatedTime" label="更新时间" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button size="small">Edit</el-button>
              <el-button size="small" type="danger">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="我的收藏" class="base-info"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCommunityStore } from '@/store'

const communityStore = useCommunityStore()
const { postList } = storeToRefs(communityStore)
communityStore.fetchPostListByUserId()
</script>

<style lang="scss" scoped></style>
