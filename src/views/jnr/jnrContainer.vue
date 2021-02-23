<!-- 自定义布局组件，包含 =
------------------header------------------
------------------header------------------
|aside|   |body                           |    
|aside|   |body                           |
|aside|   |body                           |
|aside|   |body                           |
|aside|   |body      main                 |
|aside|   |body                           |
|aside|   |body                           |
|aside|   |body                           |
|aside|   |body                           |
|aside|   |body      footer               |
 -->

<template>
  <div class="jnr-container">
    <!-- 1 左侧导航菜单组件，只需要传递一个 参数 menu,数组对象，包含了两级菜单，也可以自定义第二级菜单的点击事件，自定义事件会传递点击所获得的
    菜单信息发给父级组件，这样在自定义方法处就可以实现交互了 -->
    <slot name="aside">
      <div class="jnr-container-aside">aside</div>
    </slot>
    <slot name="body">
      <div class="jnr-container-body">
        <slot name="header">
          <div class="jnr-container-header">
            <slot name="header-item-first">
              <div class="jnr-container-header-item">header-item</div>
            </slot>
          </div></slot
        >
        <slot name="main">
          <div class="jnr-container-main text-container">
            <div class="jnr-container-main-item">main</div>
          </div></slot
        >
        <slot name="footer">
          <div class="jnr-container-footer">
            <div class="jnr-container-footer-item container text-container">
              footer
            </div>
          </div></slot
        >
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "jnrContainer",
  props: {},
  mounted() {},
  methods: {},
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
}
* {
  font-size: 14px;
}
.jnr-container {
  display: flex;
  background: #fff;
  .jnr-container-aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .jnr-container-body {
    height: 90%;
    width: 100%;
    .jnr-container-header {
      background: #487eb0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 3rem;
      line-height: 1em;
      width: 100%;
      display: flex;
      .jnr-container-header-item {
        color: #f5f6fa;
        height: 100%;
        width: 94%;
        &:nth-of-type(1) {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
    }
    .jnr-container-main {
      // background: #eff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-left: 1rem;
      margin-top: 1rem;
      width: 100%;
      height: 28rem; //这里是默认值

      .jnr-container-main-item {
        width: 98%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
      }
      .jnr-container-main-item-start {
        width: 98%;
        display: flex;
        margin-bottom: 1rem;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  .jnr-container-footer {
    margin-top: 1rem;
    margin-left: 1rem;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    z-index: 1;
    .jnr-container-footer-item {
      height: 5vh;
      width: 100%;
      margin-top: 1rem;
      &:not(:nth-of-type(1)) {
        margin-top: 1rem;
      }
    }
  }
}
// 文本居中
.text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>