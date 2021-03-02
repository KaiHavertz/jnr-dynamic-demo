<template>
  <div class="jnr-navbar">
    <!-- 左侧的展开按钮 -->
    <i class="el-icon-s-fold jnr-open"
       id="jnr-open"></i>
    <!-- 面包屑导航栏，监控当前路由形成 -->
    <el-breadcrumb separator-class="el-icon-arrow-right"
                   class="jnr-breadcrumb">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>

      <el-breadcrumb-item :to="{ path: route.path }"
                          v-for="(route,index) in routes"
                          :key="index"> {{route.name}}
      </el-breadcrumb-item>
      <!-- 为前一个选中的 -->
      <!-- <el-breadcrumb-item :to="{ path: '/charts/pie' }">活动列表</el-breadcrumb-item> -->
      <!-- 为当前点击的 -->
      <!-- <el-breadcrumb-item :to="{ path: this.$route.path}">{{ this.$route.name }}</el-breadcrumb-item> -->
    </el-breadcrumb>
    <div class="jnr-right-nav">
      <!-- 右边的网站个性化 菜单项 -->
      <el-dropdown class="jnr-right-nav-item">
        <span class="el-dropdown-link">
          <svg class="icon"
               style="width:40px;height:40px;"
               aria-hidden="true">
            <use xlink:href="#icon-touxiang"></use>
          </svg>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="jnr-right-nav-item"
                   trigger="click">
        <!--   <el-avatar src="favicon.ico"
                   class="jnr-right-nav-item"></el-avatar>-->
        <!-- 当用户上传头像之后不再使用字体  -->
        <span>设置</span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 头像 -->
      <!-- <el-avatar src="avatar.jpg"
                 class="jnr-right-nav-item"></el-avatar> -->

    </div>
  </div>
</template>
<script>
export default {
  name: 'navBar',
  data() {
    return {
      // 当前路由列表，全路径
      routes: JSON.parse(sessionStorage.getItem('routes')) || [],
    }
  },
  destroyed() {
    //清除缓存
    sessionStorage.removeItem('routes')
  },
  mounted() {
    const that = this
    //点击事件，切换展开或者收起
    document.getElementById('jnr-open').onclick = function () {
      console.log('我被点击了')
      //更改菜单相反 toggle
      that.$store.commit('menu/updateIsCollapse')
      console.log(
        document.getElementsByClassName('jnr-asideMenu')[0].style.width
      )
      console.log(document.getElementById('aside').style.width)
      try {
        this.classList.forEach((element) => {
          //说明当前是收起的状态，需要修改为展开
          if (element === 'el-icon-s-unfold') {
            //修改展开收起图标
            this.classList.remove('el-icon-s-unfold')
            this.classList.add('el-icon-s-fold')
            //修改对应的左侧导航栏菜单宽度与样式 为正常状态
            document.getElementsByClassName('jnr-asideMenu')[0].style.width =
              '206px'
            document.getElementById('aside').style.width = '206px'
            document.getElementById('dashboard').style.display = 'block'

            //退出循环
            throw new Error('退出循环')
            //说明当前是展开的状态，需要修改为收起
          } else if (element === 'el-icon-s-fold') {
            //修改展开收起图标
            this.classList.remove('el-icon-s-fold')
            this.classList.add('el-icon-s-unfold')
            //修改对应的左侧导航栏菜单宽度与样式
            document.getElementsByClassName('jnr-asideMenu')[0].style.width =
              '68px'
            document.getElementById('aside').style.width = '20px'
            document.getElementById('dashboard').style.display = 'none'
            //退出循环
            throw new Error('退出循环')
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  // 监听路由变化
  watch: {
    $route: {
      handler(newVal, oldVal) {
        var that = this
        console.log(newVal, oldVal)
        this.routes = []
        newVal.matched.forEach((element) => {
          if (
            element.path !== '' &&
            element.path !== '/' &&
            element.path !== '/dashboard'
          ) {
            //排除掉首页
            that.routes.push({ path: element.path, name: element.name })
          }
        })
      },
    },
    routes(val) {
      console.log('val:', val)
      if (val) {
        sessionStorage.setItem('routes', JSON.stringify(val))
      }
    },
  },
}
</script>
<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.jnr-navbar {
  display: flex;
  justify-content: flex-start;
  position: relative;
  left: 0;
  .jnr-open {
    height: 48px;
    width: 48px;
    display: flex;
    margin-left: 0;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.3rem;
    &:hover {
      background: #eee;
    }
  }
  .jnr-breadcrumb {
    margin-right: auto;
  }
  .jnr-right-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    .jnr-right-nav-item {
      margin-right: 2rem;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media screen and (max-width: 582px) {
  .jnr-breadcrumb {
    display: none;
  }
}
</style>