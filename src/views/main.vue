
<template>
  <jnr-container>
    <div class="jnr-container-aside" slot="aside">
      <jnr-aside-nav :menu="menu" @jnr-click="addTab"></jnr-aside-nav>
    </div>
    <div class="jnr-container-body" slot="body">
      <div class="jnr-container-header" slot="header">
        <div class="jnr-container-header-item" slot="header-item-first">
          <jnr-header-nav></jnr-header-nav>
        </div>
      </div>
      <div class="jnr-container-main" slot="main">
        <jnr-tabs
          :height="tabHeight"
          ref="tabs"
          @tab-click="tabClick"
          @tab-close="tabClose"
          class="jnr-container-main-item-start"
        >
          <!-- 除了自带的菜单项，还可以自定义，甚至可以完全自定义自带菜单 jnr-disabled表示禁止点击，无效果 -->
          <slot name="item"><div class="jnr-disabled item">禁止</div> </slot>
          <!-- 内容区域 -->
          <!-- <div slot="content" class="jnr-container-main-item">
            <echarts></echarts>
          </div> -->
        </jnr-tabs>
      </div>
      <!-- <template slot="footer"> </template> -->
    </div>
  </jnr-container>
</template>

<style lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>


<script>
// import $ from "jquery";
import jnrTabs from "../components/jnr/jnrTabs.vue";
import jnrHeaderNav from "../components/jnr/jnrHeaderNav.vue";
import jnrAsideNav from "../components/jnr/jnrAsideNav.vue";
import jnrContainer from "../components/jnr/jnrContainer.vue";
export default {
  name: "main",
  components: { jnrTabs, jnrHeaderNav, jnrAsideNav, jnrContainer },
  data() {
    return {
      tabHeight: "400px", // tab面板高度
    };
  },
  computed: {
    menu: {
      get() {
        return this.$store.getters.getMenu;
      },
      set(newVal) {
        console.log("1 menu newVal", newVal);
      },
    },
    tabsCurrentId: {
      get() {
        console.log("1 tabsCurrentId newVal");
        return this.$store.getters.getTabCurrentId;
      },
      set(newVal) {
        console.log("1 tabsCurrentId newVal", newVal);
      },
    },
  },
  methods: {
    //点击了标签事件 可以让子组件执行该方法
    tabClick() {},
    //可以让子组件执行该方法
    tabClose() {},
    ///当前是否已经在列表中了
    isOpen(id) {
      var open = false;
      try {
        this.$store.getters.getTabsDataArray.forEach((item) => {
          if (item.id === id) {
            open = true;
            throw new Error("End Loop");
          }
          console.log(item);
        });
      } catch (e) {
        console.log(e);
      }
      return open;
    },
    addTab(item) {
      // 判断是否已经展开了
      // 1 如果没展开则添加后选中
      console.log("this.tabsCurrentId", this.tabsCurrentId);
      console.log(" item.id", item.id);

      if (!this.isOpen(item.id)) {
        this.$store.commit("addTabsDataArray", item);
      }
      //设置当前选中的标签序号
      this.$store.commit("updateTabsCurrentId", item.id);
    },
  },
  mounted() {
    window.addEventListener("beforeunload", function (e) {
      console.log(e);
      console.log("触发刷新事件");
    });
  },
};
</script>

