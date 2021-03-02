<template>
  <div class="jnr-layout">
    <div class="jnr-asideMenu">
      <aside class="jnr-asideMenu-aside">
        <router-link to="/dashboard">
          <svg class="icon logo"
               aria-hidden="true">
            <use xlink:href="#icon-logo7"></use>
          </svg>
        </router-link>
        <router-link to="/dashboard"><span id="dashboard"
                class="dashboard">主页</span></router-link>
      </aside>
      <aside-menu>
      </aside-menu>
    </div>
    <div class="jnr-main-container">
      <div class="jnr-navbar">
        <nav-bar></nav-bar>
      </div>
      <div class="jnr-tabs">
        <!-- <tabs></tabs> -->
        <tags-view></tags-view>
      </div>
      <div class="jnr-appMain">
        <app-main class="item"></app-main>
      </div>
    </div>
  </div>
</template>
<script>
import asideMenu from '@/layout/components/asideMenu'
import navBar from '@/layout/components/navBar'
import tagsView from '@/layout/components/tagsView'
import appMain from '@/layout/components/appMain'
export default {
  nameL: 'layout',
  components: { asideMenu, appMain, navBar, tagsView },
}
</script>
<style lang="less" scoped>
@navbar: 48px;
@tagsview: 34px;
.jnr-layout {
  display: flex;
  //让子元素撑满即可
  .jnr-asideMenu {
    width: 206px;
    position: relative;
    left: 0;
    top: 0;
    background: #304156;
    //绝对定位之后 指定 宽 左 上对齐就可以让高度最大化
    .jnr-asideMenu-aside {
      background: #535c68;
      color: #fff;
      display: flex;
      justify-content: space-evenly;
      padding: 0 2rem;
      align-items: center;
      .logo {
        width: 50px;
        height: 50px;
      }
      .dashboard {
        color: #eee;
        font-size: 0.9rem;
      }
    }
  }
  .jnr-main-container {
    width: 100%;
    .jnr-navbar {
      height: @navbar;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
    }
    .jnr-tabs {
    }
    .jnr-appMain {
      min-height: calc(100vh - @tagsview - @navbar);
      width: 100%;
      // background: #dfe6e9;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .item {
        padding: 0 1.5rem;
        flex: 1;
        width: 100%;
        display: flex;
      }
    }
  }
}
</style>
<style lang="less" scoped>
@media screen and (max-width: 582px) {
  .jnr-tabs {
    display: none !important;
  }
}
</style>