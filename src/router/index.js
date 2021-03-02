import Vue from "vue";
import VueRouter from "vue-router";
//import home from "@/layout/home";
import Layout from "@/layout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    name: "首页",
    redirect: "/dashboard",
    meta: {
      icon: "#icon-shouye",
      applyClose: false
    },
    children: [
      {
        path: "dashboard",
        name: "管理面板",
        component: () => import("@/views/dashboard"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: false
        }
      }
    ]
  },
  //测试 实例组件
  {
    path: "/component-demo",
    name: "示例组件",
    component: Layout,
    meta: {
      icon: "#icon-xiugai2",
      applyClose: true
    },
    children: [
      // 默认显示的组件
      {
        path: "",
        name: "示例组件-默认组件",
        component: () => import("@/views/component-demo"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      },
      {
        path: "menu",
        name: "示例组件-导航栏",
        component: () => import("@/views/component-demo/menu"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      },
      {
        path: "tinymce",
        name: "示例组件-富文本",
        component: () => import("@/views/component-demo/tinymce"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      },
      {
        path: "pageHelper",
        name: "示例组件-分页",
        component: () => import("@/views/component-demo/pageHelper"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      },
      {
        path: "carousel",
        name: "示例组件-走马灯",
        component: () => import("@/views/component-demo/carousel"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      },
      {
        path: "tabs",
        name: "示例组件-标签",
        component: () => import("@/views/component-demo/tabs"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      },
      {
        path: "collapse",
        name: "示例组件-折叠面板",
        component: () => import("@/views/component-demo/collapse"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      },
      {
        path: "tabs",
        name: "示例组件-标签",
        component: () => import("@/views/component-demo/tabs"),
        meta: {
          icon: "#icon-waishemianban",
          applyClose: true
        }
      }
    ]
  },
  {
    path: "/charts",
    name: "图表管理",
    component: Layout,
    redirect: "/charts",
    meta: {
      icon: "#icon-tubiao",
      applyClose: true
    },
    children: [
      {
        path: "bar",
        name: "条形图",
        component: () => import("@/views/charts/bar"),
        meta: {
          icon: "#icon-icon",
          applyClose: true
        }
      },
      {
        path: "pie",
        name: "饼图",
        component: () => import("@/views/charts/pie"),
        meta: {
          icon: "#icon-bingtu",
          applyClose: true
        }
      },
      {
        path: "histogram",
        name: "柱状图",
        component: () => import("@/views/charts/histogram"),
        meta: {
          icon: "#icon-zhuzhuangtu1",
          applyClose: true
        }
      }
    ]
  },
  {
    path: "/authority",
    name: "权限管理",
    component: Layout,
    redirect: "/authority/view", //默认的
    meta: {
      icon: "#icon-quanxianguanli",
      applyClose: true
    },
    children: [
      {
        path: "view",
        name: "权限查看",
        component: () => import("@/views/authority/view"),
        meta: {
          icon: "#icon-icon-quanxian",
          applyClose: true
        }
      },
      {
        path: "modify",
        name: "修改权限",
        component: () => import("@/views/authority/modify"),
        meta: {
          icon: "#icon-quanxian2",
          applyClose: true
        }
      }
    ]
  },
  {
    path: "/registrationCall",
    name: "挂号与叫号管理",
    component: Layout,
    meta: {
      icon: "#icon-guahaowenzhen",
      applyClose: true
    },
    children: [
      {
        path: "registration",
        name: "挂号管理",
        component: () => import("@/views/registrationCall/registration"),
        meta: {
          icon: "#icon-tubiaozhizuomobankuozhan-",
          applyClose: true
        }
      },
      {
        path: "call",
        name: "叫号管理",
        component: () => import("@/views/registrationCall/call"),
        meta: {
          icon: "#icon-paidui",
          applyClose: true
        }
      }
    ]
  },
  {
    path: "/announcement",
    name: "公告与文章管理",
    component: Layout,
    meta: {
      icon: "#icon-gonggao1",
      applyClose: true
    },
    children: [
      {
        path: "edit",
        name: "编辑",
        component: () => import("@/views/announcement/edit"),
        meta: {
          icon: "#icon-bianji",
          applyClose: true
        }
      },
      {
        path: "list",
        name: "查看列表",
        component: () => import("@/views/announcement/list"),
        meta: {
          icon: "#icon-chakanliebiao",
          applyClose: true
        }
      }
    ]
  },
  {
    path: "/account",
    name: "账号管理",
    component: Layout,
    meta: {
      icon: "#icon-zhanghaoguanli",
      applyClose: true
    },
    children: [
      {
        path: "information",
        component: () => import("@/views/account/information"),
        name: "查看资料",
        meta: {
          icon: "#icon-ziliao",
          applyClose: true
        }
      },
      {
        path: "modify",
        name: "修改资料",
        component: () => import("@/views/account/modify"),
        meta: {
          icon: "#icon-xiugaiziliao",
          applyClose: true
        }
      },
      {
        path: "logout",
        name: "注销",
        component: () => import("@/views/account/logout"),
        meta: {
          icon: "#icon-tuichudenglu",
          applyClose: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default router;
