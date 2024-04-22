import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getListMyChartByPageUsingPOST(data: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/chart/my/list/page',
    data,
  })
}
