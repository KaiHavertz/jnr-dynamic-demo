<template>
  <!-- 左侧导航栏菜单，根据路由动态生成 -->
  <div class="jnr-asideMenu"
       id="aside">
    <!-- 测试 -->
    <el-menu default-active="/dashboard"
             id="menu"
             router
             :collapse-transition="false"
             background-color="#304156"
             text-color="#fff"
             class="jnr-asideMenu-menu"
             @open="handleOpen"
             @close="handleClose"
             :collapse="isCollapse">
      <!-- 坑：el-menu-item 不展开时图标失效（当使用了template自定义标题），
      解决办法：去掉template ，直接放标题和图标 -->
      <el-menu-item :index="subItem.path"
                    collapse
                    v-for="(subItem,subIndex) in subMenu"
                    :key="subItem.path+subIndex">
        <!-- <i :class="subItem.icon"></i> -->
        <!-- 使用阿里巴巴图标库 -->
        <svg class="icon"
             aria-hidden="true">
          <use :xlink:href="subItem.icon"></use>
        </svg>
        <span slot="title"> {{ subItem.name }}</span>
      </el-menu-item>
      <el-submenu :index="subItem.path"
                  :key="index"
                  v-for="(subItem,index) in menu">
        <template slot="title">
          <!-- <i :class="subItem.icon"></i> -->
          <!-- 使用阿里巴巴图标库 -->
          <svg class="icon"
               aria-hidden="true">
            <use :xlink:href="subItem.icon"></use>
          </svg>
          <span slot="title"
                style="margin-left:.5rem;">{{ subItem.name }}</span>
        </template>
        <el-menu-item :index="subItem.path+'/'+item.path"
                      v-for="(item,i) in subItem.subMenu"
                      :key="i"> <template slot="title">
            <!-- <i :class="item.meta.icon"></i> -->
            <!-- 使用阿里巴巴图标库 -->
            <svg class="icon"
                 aria-hidden="true">
              <use :xlink:href="item.meta.icon"></use>
            </svg>
            <span slot="title"> {{ item.name }}</span>
          </template></el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>
<script>
// import menuItem from '@/layout/components/asideMenu/components/menuItem'
// import subMenu from '@/layout/components/asideMenu/components/subMenu'
export default {
  name: 'asideMenu',
  // eslint-disable-next-line vue/no-unused-components
  // components: { subMenu, menuItem },
  watch: {
    isCollapse: {
      handler() {},
    },
  },
  data() {
    return {
      subMenu: [],
    }
  },
  //计算属性，根据router path 动态生成菜单
  computed: {
    isCollapse: {
      get() {
        //从全局变量中获取
        return this.$store.state.menu.isCollapse
      },
      set(val) {
        console.log(val)
      },
    },
    menu: {
      get() {
        const that = this
        var list = new Array()
        //遍历全局路由
        var routes = this.$router.options.routes
        // 找出所有具有子节点的路由设置为一级菜单，没有子节点的设为二级菜单，
        //相当于有子节点并且子节点数大于1
        routes.forEach((element) => {
          if (that.hasChildren(element)) {
            //存父节点
            list.push({
              path: element.path,
              name: element.name,
              icon: element.meta.icon,
              subMenu: element.children,
              applyClose: element.meta.applyClose,
            })
          } else {
            that.subMenu.push({
              path: element.path,
              name: element.name,
              icon: element.meta.icon,
              applyClose: element.meta.applyClose,
            })
          }
        })
        return list
        // 设置menu的值
      },
      set(val) {
        console.log(val)
      },
    },
  },
  methods: {
    //
    hasChildren(element) {
      // 找出所有具有子节点的路由设置为一级菜单，没有子节点的设为二级菜单，
      //相当于有子节点
      return (
        Object.prototype.hasOwnProperty.call(element, 'children') &&
        element.children.length > 1
      )
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
<style lang="less" scoped>
.jnr-asideMenu-menu {
  border: none !important;
  width: 100%;
}
</style>