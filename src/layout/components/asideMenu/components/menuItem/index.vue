<template>
  <!-- 二级菜单 -->
  <el-menu-item :index="subMenu.path">{{ subMenu.name }}</el-menu-item>
</template>
<script>
export default {
  name: 'menuItem',
  props: {
    //菜单索引。是router的path
    subMenu: {
      type: Object,
    },
  },
}
</script>