<!--
 * @Description: 按钮
 * @Author: luocheng
 * @Date: 2022-10-28 16:10:11
 * @LastEditors: 冉桂精 156189868@qq.com
 * @LastEditTime: 2022-11-10 11:32:27
-->
<template>
  <button class="ra-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RaButton'
});
</script>

<style scoped lang="scss">
@import './button.scss';
  .ra-button {
    border: 1px solid red;
    box-sizing: border-box;
    padding: 8px 10px;
  }
</style>
