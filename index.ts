/*
 * @Description: 组件PC 入口index
 * @Author: luocheng
 * @Date: 2022-10-28 16:17:02
 * @LastEditors: zyf
 * @LastEditTime: 2022-12-06 15:06:20
 */
import type { App } from 'vue';
import RaButton from './button/index';

const components = [
  RaButton
];

const install = function(app:App) {
  components.map((item:any) => { 
    app.use(item)
  })
}
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

const BimccUI = {
  version: '0.0.1 alpha',
  install
}


export { RaButton };

export default BimccUI
