/*
 * @Description: 入口
 * @Author: luocheng
 * @Date: 2022-10-28 16:09:54
 * @LastEditors: luocheng
 * @LastEditTime: 2022-10-28 16:38:26
 */
import type { App } from 'vue';
import RaButton from './src/button.vue';
export * from './src/button';

RaButton.install = (app: App) => {
  app.component(RaButton.name, RaButton);
};

export { RaButton };
export default RaButton;
