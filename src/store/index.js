import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  //全局变量
  state: {
    count:1,
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
    tabsCurrentId:-1,
    tabsDataArray:new Array(),

  },
  //getters
  getters: {
    getMenu(state) {
      return state.menu
    },
    getTabCurrentId(state) {
      return state.tabsCurrentId
    },
    getTabsDataArray(state) {
      return state.tabsDataArray
    },
  },
  //方法
  mutations: {
    decrement(state) {
      state.count--
    },
    increment(state) {
      state.count++
    },
    updateTabsCurrentId(state,newVal) {
      state.tabsCurrentId = newVal
    },
    updateTabsDataArray(state,newVal) {
      state.tabsDataArray = newVal
    },
    addTabsDataArray(state,item){
      state.tabsDataArray.push(item)
    },
  },
  //异步请求
  actions: {
    decrement(context) {
      //返回 Promise
      return new Promise((resolve, reject) => {
        //执行异步请求
        context.commit('increment')
        resolve('执行完毕')
        reject('有异常')

      })
    }
  }
});
