<template>
  <div class="jnr-aside-nav">
    <i @click="collapse" class="el-icon-s-fold jnr-aside-nav-icon"></i>
    <el-menu :collapse="isCollapse" class="jnr-aside-nav-menu">
      <el-submenu
        v-for="(items, id) in menu"
        :key="id"
        :index="`1-${id}`"
        class="jnr-aside-nav-menu-item"
      >
        <template slot="title"
          ><i :class="items.icon"></i>
          <span slot="title" class="jnr-aside-nav-menu-item-title">
            {{ items.title }}</span
          >
        </template>
        <el-menu-item
          class="jnr-aside-nav-menu-subitem"
          v-for="subItems in items.subMenus"
          @click="jnrClick(subItems)"
          :key="subItems.id"
          :index="`2-${subItems.id}`"
        >
          <template slot="title"
            ><i :class="subItems.icon"></i>
            <span slot="title" class="jnr-aside-nav-menu-subitem-title">
              {{ subItems.title }}</span
            >
          </template>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "jnrAsideNav",
  props: { menu: Array },
  data() {
    return {
      isCollapse: false, //控制左侧导航栏缩小或开启
    };
  },
  methods: {
    //展开或收起
    collapse() {
      //展开与收缩效果
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse)
        document
          .getElementsByClassName("jnr-aside-nav")[0]
          .classList.add("me-collapse");
      else
        document
          .getElementsByClassName("jnr-aside-nav")[0]
          .classList.remove("me-collapse");
    },
    //点击菜单项
    jnrClick(item) {
      //执行父组件的方法
      this.$emit("jnr-click", item);
    },
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.jnr-aside-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  .jnr-aside-nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.me-collapse {
  width: 50px;
}
.min-me-uncollapse {
  display: block;
}
@media only screen and (max-width: 594px) {
  //缩小宽度和字体大小

  //不允许展开或缩小
  .jnr-aside-nav-icon {
    display: none !important;
  }
  .jnr-aside-nav-menu {
    .jnr-aside-nav-menu-item {
      .jnr-aside-nav-menu-item-title {
        font-size: 0.1rem !important;
        display: none;
      }
      .jnr-aside-nav-menu-subitem {
      }
      .jnr-aside-nav-menu-subitem-title {
        font-size: 0.1rem !important;
      }
    }
  }
}
</style>