<template>
  <!-- 一级菜单 -->
  <div>
    <el-submenu :index="menu.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{ menu.name }}</span>
      </template>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: 'subMenu',
  props: {
    //菜单索引。是router的path
    menu: {
      type: Object,
    },
  },
  components: {},
}
</script>