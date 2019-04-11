<template>
  <div id="app" class="app-container">
    <!-- 顶部Heard -->
    <mt-header fixed title="QUON BRAND"></mt-header>
    <!-- 内容 -->
    <!-- 底部栏 -->
    <!-- <router-view/> -->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email" 
          ><span class="mui-badge">9</span></span
        >
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯fdf录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
  </div>
</template>

<script>
import './lib/mui/css/mui.min.css'
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
.app-container {
  padding: 40px;
}
</style>
