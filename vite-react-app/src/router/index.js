/*
 * @Author: houyazhao
 * @Date: 2021-04-13 16:16:31
 * @LastEditors: houyazhao
 * @LastEditTime: 2021-05-13 17:10:54
 * @Description: 
 * @FilePath: /vite-react-app/src/router/index.js
 */
import Index from '@/views/Index'
import About from '@/views/About'
import Hook from '@/views/Hook'

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/hook",
    component: Hook
  }
];

export default routes