// 创建大仓库
import { createPinia } from 'pinia'
const pinia = createPinia()
export default pinia

export * from './modules/user'
export * from './modules/community'
