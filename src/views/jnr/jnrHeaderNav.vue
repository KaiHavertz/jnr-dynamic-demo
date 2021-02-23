<template>
  <div class="jnrNavBar">
    <ul>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span class="item">关于我</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >螺蛳粉</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check"
            >蚵仔煎</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <li>设置与管理</li>
      <li><i class="el-icon-s-custom"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "jnrHeaderNav",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #f5f6fa;
}
.el-icon-arrow-down {
  font-size: 12px;
}
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
  box-sizing: border-box;
}
.jnrNavBar {
  width: 100%;
  margin-top: 0.5rem;
  background: #487eb0;
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    li {
      height: 100%;
      margin: 0 0.8rem;
      cursor: pointer;
      font-size: 1.1rem;
      color: #f5f6fa;
      &:hover {
        border-bottom: #fbc531 2px solid;
      }
    }
  }
}
.item {
  font-size: 1.1rem;
}
</style>