
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
          :currentId="currentId"
          :dataList="dataList"
          :height="tabHeight"
          ref="tabs"
          @tab-modify="tabModify"
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
  name: "jnrMain",

  components: { jnrTabs, jnrHeaderNav, jnrAsideNav, jnrContainer },
  props: {},
  data() {
    return {
      autoHome: true, //是否开启首页
      tabHeight: "400px", // tab面板高度
      dataList: [
        {
          id: 0,
          title: "首页",
          icon: "el-icon-s-home",
          applyClose: false,
        },
      ], //初始的值
      //默认显示第一个 即第一个对应的 menu 的 submenu 的id
      //当为-1时表示没有
      currentId: 0, // ，那么你需要给 dataList添加内容，否则失效
      menu: [
        {
          title: "图表管理",
          icon: "el-icon-monitor",
          subMenus: [
            {
              id: 1,
              title: "条形图",
              icon: "el-icon-s-marketing",
              applyClose: false,
            }, //是否 需要 关闭 × 图标
            {
              id: 2,
              title: "饼图",
              icon: "el-icon-pie-chart",
              applyClose: true,
            },
            {
              id: 3,
              title: "柱状图",
              icon: "el-icon-s-data",
              applyClose: true,
            },
            {
              id: 4,
              title: "复式图",
              icon: "el-icon-s-grid",
              applyClose: true,
            },
          ],
        },
        {
          title: "权限管理",
          icon: "el-icon-lock",
          subMenus: [
            {
              id: 5,
              title: "权限查看",
              icon: "el-icon-notebook-1",
              applyClose: true,
            },
            {
              id: 6,
              title: "修改权限",
              icon: "el-icon-unlock",
            },
          ],
        },
        {
          title: "挂号与叫号管理",
          icon: "el-icon-phone",
          subMenus: [
            {
              id: 7,
              title: "挂号管理",
              icon: "el-icon-collection-tag",
              applyClose: true,
            },
            {
              id: 8,
              title: "叫号管理",
              icon: "el-icon-phone-outline",
              applyClose: true,
            },
          ],
        },
        {
          title: "公告与文章管理",
          icon: "el-icon-message",
          subMenus: [
            {
              id: 0,
              title: "首页",
              icon: "el-icon-s-home",
              applyClose: false,
            },
            {
              id: 9,
              title: "查看列表",
              icon: "el-icon-notebook-2",
              applyClose: true,
            },
            {
              id: 10,
              title: "编辑",
              icon: "el-icon-edit",
              content: `
         <el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
          `,
              applyClose: true,
            },
          ],
        },
        {
          title: "账号管理",
          icon: "el-icon-s-custom",
          subMenus: [
            {
              id: 11,
              title: "查看资料",
              icon: "el-icon-place",
              applyClose: true,
            },
            {
              id: 12,
              title: "修改资料",
              icon: "el-icon-setting",
              applyClose: true,
            },
            {
              id: 13,
              title: "注销登录",
              icon: "el-icon-circle-close",
              applyClose: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
    //点击了标签事件
    tabClick(title) {
      //获取主菜单
      //设置面包屑的两级标题
      console.log(title);
    },
    //根据父组件传过来的新的 数组数据更新本组件的 dataList
    tabClose(dataList) {
      this.dataList = dataList;
    },
    ///当前是否已经在列表中了
    isOpen(id) {
      var open = false;
      try {
        this.dataList.forEach((item) => {
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
    //修改本组件的数据，让子组件可以使用
    tabModify(id) {
      this.currentId = parseInt(id);
    },
    addTab(item) {
      // 判断是否已经展开了
      // 1 如果没展开则添加后选中
      this.currentId = item.id;

      if (!this.isOpen(item.id)) {
        this.dataList.push({
          ...item,
        });
      } else {
        console.log("已展开");
      }
      //设置当前选中的标签序号
      //手动触发子组件事件，修改父组件的值
    },
  },
  mounted() {
    window.onbeforeunload = function () {
      console.log("刷新1", this.$route.path);

      return false;
    };
  },
};
</script>

