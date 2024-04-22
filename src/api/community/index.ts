import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getPostListByUserId() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/community/post/postByUserId',
  })
}
