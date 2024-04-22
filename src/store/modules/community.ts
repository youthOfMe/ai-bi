import { defineStore } from 'pinia'
import { getPostListByUserId } from '@/api'

export const useCommunityStore = defineStore('community', {
  state: (): any => ({
    postList: [],
  }),
  actions: {
    async fetchPostListByUserId() {
      const res = await getPostListByUserId()
      this.postList = res.data
    },
  },
})
