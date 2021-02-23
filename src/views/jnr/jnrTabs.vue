<template>
  <div class="jnr-tabs">
    <!-- 标题区域 -->
    <header class="jnr-tabs-title">
      <i
        class="el-icon-caret-left"
        id="jnr-tabs-title-left"
        @click="toLeft"
      ></i>
      <i
        class="el-icon-caret-right"
        id="jnr-tabs-title-right"
        @click="toRight"
      ></i>
      <span> </span>
      <slot name="header">
        <div class="jnr-tabs-title-content">
          <div
            class="jnr-tabs-title-item"
            :key="index"
            v-for="(item, index) in tabsDataArray"
            @contextmenu="rightClick(item, $event)"
          >
            <input
              name="jnr-tabs-title-item-radio"
              class="jnr-tabs-title-item-input"
              type="radio"
              style="display: none"
              :id="`jnr-tabs-title-item-${item.id}`"
            />
            <label
              @click="tabClick"
              :data-id="item.id"
              :id="`jnr-tabs-title-item-label-${item.id}`"
              :for="`jnr-tabs-title-item-${item.id}`"
              class="jnr-tabs-title-item-label"
              >{{ item.title }}</label
            >
            <i :data-id="item.id" v-show="item.applyClose" @click="tabClose"
              >×</i
            >
          </div>
        </div>
      </slot>
      <!-- 右键弹出菜单 -->
      <div class="jnr-dialog" v-show="tabsMenuVisable">
        <article class="subItem sperate-4">
          <!-- 配置的具备的项 -->
          <div class="item" @click="closeRight">关闭右侧所有</div>
          <div class="item" @click="closeAll">关闭所有</div>
          <div class="item" @click="closeMenu">取消</div>
          <!-- 自定义项 ，需要自己编写功能-->
          <slot name="item"><div class="jnr-disabled item">禁止</div></slot>
        </article>
      </div>
    </header>

    <!-- 内容区域 -->
    <main class="jnr-tabs-content" :style="style">
      <slot name="content">
        <router-view></router-view>
      </slot>
    </main>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "tabs",
  components: {},

  /* 
     watch: {
    $route(to, from) {
      console.log("路由 to.path", to.path, "路由 from.path:", from.path);
      $(`#jnr-tabs-title-item-label-${this.tabsCurrentId}`).click();
      // this.modifyTab(parseInt(to.path.split("/")[1]));
    },*/
  //监听 用户 dataList 的变化，一有更新马上同步更新本组件 tabsDataArray
  /*  tabsDataArray: {
      handler(val) {
        this.tabsDataArray = val;
        //手动触发 currentId发生变化
      },
    },*/
  //监听用户 序号的变化。马上更新本组件的
  /*tabsCurrentId: {
      handler(val) {
        this.modifyTab(val);
      },
  },
    },*/
  watch: {
    $route(to, from) {
      console.log("路由 to.path", to.path, "路由 from.path:", from.path);
      $(`#jnr-tabs-title-item-label-${this.tabsCurrentId}`).click();
      // this.modifyTab(parseInt(to.path.split("/")[1]));
    },
    tabsCurrentId: {
      handler(val) {
        this.modifyTab(val);
      },
    },
  },
  // 接收用于预定义数据
  props: {
    height: String, //设置组件的高度  非必须
  },

  data() {
    return {
      style: "height:100px;", //整个容器的默认高度样式
      selectId: 1, ///右键选中的值
      tabsMenuVisable: false, //右键菜单是否显示
    };
  },
  computed: {
    tabsDataArray: {
      get() {
        console.log("2 tabsDataArray get newVal");
        return this.$store.getters.getTabsDataArray;
      },
      set(newVal) {
        console.log("2 tabsDataArray newVal", newVal);
      },
    },
    tabsCurrentId: {
      get() {
        console.log("2 tabsCurrentId newVal");
        return this.$store.getters.getTabCurrentId;
      },
      set(newVal) {
        console.log("2 调用了 set", newVal);
        //发生变化时
      },
    },
  },
  // 预处理用户自定义数据
  mounted() {
    // 1赋值
    // 1.1  拼接传递过来的 height 参数
    if (!this.height) {
      console.log("没有传递高");
    } else {
      this.style = `height:${this.height};`;
    }

    //2 禁止页面默认右键事件
    document.oncontextmenu = function () {
      return false;
    };
  },
  methods: {
    //toLeft 左边缩
    toLeft() {
      // $(".jnr-tabs-title-content>.jnr-tabs-title-item:eq(0)").css({
      //   transform: "translate(-116rem)",
      // });
      // for (var i = 1; i < this.tabsDataArray.length; i++) {
      //   $(`.jnr-tabs-title-content>.jnr-tabs-title-item:eq(${i})`).css({
      //     transform: "translate(-6rem)",
      //   });
      // }
    },
    toRight() {
      // $(".jnr-tabs-title-content>.jnr-tabs-title-item:eq(0)").css({
      //   transform: "translate(116rem)",
      // });
      // for (var i = 1; i < this.tabsDataArray.length; i++) {
      //   $(`.jnr-tabs-title-content>.jnr-tabs-title-item:eq(${i})`).css({
      //     transform: "translate(6rem)",
      //   });
      // }
    },
    //修改当前选中的标签
    modifyTab(tabsCurrentId) {
      console.log("我1111");

      //切换 索引
      this.$store.commit("updateTabsCurrentId", tabsCurrentId);
      //代码的形式跳转路由
      //切换内容
      new Promise((resolve, reason) => {
        resolve("resolve");
        reason("reason");
        this.$router
          .push({
            path: "./" + this.tabsCurrentId,
          })
          .then((data) => {
            console.log("成功", data);
          })
          .catch((data) => {
            console.log("失败", data);
          });
      });

      $(`#jnr-tabs-title-item-label-${this.tabsCurrentId}`).click();
    },
    // 提供鼠标点击标签事件/切换
    tabClick(target) {
      //显示关闭图标
      //再执行父组件的方法 方法没有参数时第二个参数用 null或者不写第二个参数也行，父组件没有此方法不会报错
      // 获取当前选中的标题
      for (var i = 0; i < this.tabsDataArray.length; i++)
        if (this.tabsDataArray[i].id == this.tabsCurrentId) break;
      this.$emit("tab-click", this.tabsDataArray[i].title);
      //切换面板显示
      this.modifyTab(target.toElement.dataset.id);
    },
    // 提供关闭功能
    tabClose(target) {
      // 获取自定义属性的 data-id
      var id = target.toElement.dataset.id;
      //关闭当前标签和对应的内容
      let tabs = this.tabsDataArray;
      //删除指定的 一个
      this.$store.commit(
        "updateTabsDataArray",
        tabs.filter((tab) => {
          return tab.id != id;
        })
      );
      //当为空时
      if (this.tabsDataArray == null || this.tabsDataArray.length == 0)
        //重置为 -1
        this.modifyTab(-1);
      //当只剩下一个时，设置为第一个
      if (this.tabsCurrentId == 1)
        // 设置当前选中的 标签id
        // 回退到关闭的前一个
        this.modifyTab(1);
      //当剩余多于1个时，选择刚刚删除的前一个
      else if (this.tabsCurrentId > 1) {
        var tempId = id;
        this.modifyTab(tempId - 2);
      }

      //关闭当前菜单
      this.tabsMenuVisable = false;

      //再执行父组件的方法,更新父组件在本组件的副本数据 dataList
      this.$emit("tab-close", this.tabsDataArray);
      //删除选中样式
      //阻止父级事件发生
      return false;
    },
    //2 右键菜单相关
    // 关闭菜单
    closeMenu() {
      this.tabsMenuVisable = false;
    },
    //右键事件
    rightClick(item, event) {
      //当前追加样式
      // 显示菜单
      this.tabsMenuVisable = true;

      //获取当前右键选中的标签 id
      this.selectId = item.id;
      console.log("右键事件 item.id", item.id);

      //设置当前的右键选中的index

      // 根据 position 设置菜单位置
      var offsetX = event.offsetX;
      var countIndex = 0; //当前项是第几个
      for (var i = 0; i < this.tabsDataArray.length; i++) {
        if (item.id == this.tabsDataArray[i].id) {
          countIndex = i;
          break;
        }
      }
      var left = offsetX + countIndex * 5.1 * 14;
      var top = parseInt($(event.target).css("height").split("px")[0]);

      console.log("left", left, "top", top);
      $(".jnr-tabs>.jnr-tabs-title>.jnr-dialog").css({
        left: left + "px",
        top,
      });
    },
    // 菜单事件
    closeRight() {
      var lastList = new Array(); //剩下的
      //关闭右侧所有
      for (let i = 0; i < this.tabsDataArray.length; i++) {
        lastList.push(this.tabsDataArray[i]); //留下左边
        if (this.tabsDataArray[i].id === this.selectId) break;
      }
      this.$store.commit("updateTabsDataArray", lastList);
      // 关闭菜单面板
      this.closeMenu();
      //再执行父组件的方法,更新父组件在本组件的副本数据 dataList
      this.$emit("tab-close", this.tabsDataArray);
    },
    //关闭所有
    closeAll() {
      this.$store.commit("updateTabsDataArray", new Array());
      // 关闭菜单面板
      this.closeMenu();
      //再执行父组件的方法,更新父组件在本组件的副本数据 dataList
      this.$emit("tab-close", this.tabsDataArray);
      //重新设置 当前选中的索引
      if (this.tabsDataArray.length == 0 || this.tabsDataArray == null) {
        console.log("全部为空了");
      } else {
        //设置第一个，即首页为选中的
        this.modifyTab(1);
      }
    },
  },
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.jnr-tabs {
  display: flex;
  flex-direction: column;

  .jnr-tabs-title {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2rem;
    margin-bottom: 0.4rem;
    position: relative;
    #jnr-tabs-title-left {
      content: "<";
      position: absolute;
      left: 2em;
      top: 50%;
      width: 2em;
      border-radius: 50%;
      background: #3498db;
      height: 2em;
      line-height: 2em;
      transform: translate(0, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ecf0f1;
    }
    //右侧
    #jnr-tabs-title-right {
      content: ">";
      position: absolute;
      right: 2em;
      top: 50%;
      width: 2em;
      border-radius: 50%;
      height: 2em;
      transform: translate(0, -50%);
      background: #2ecc71;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ecf0f1;
    }

    .jnr-tabs-title-content {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-left: 4rem;
      position: relative;
      .jnr-tabs-title-item {
        border-radius: 1rem;
        font-size: 0.85rem;
        border-right: 1px solid #fff;
        // background: #dfe6e9;
        background: #ddd;
        width: 6rem;
        height: 2.5rem;

        cursor: pointer;
        color: #353b48;
        position: relative;
        // 第一个默认显示
        .jnr-tabs-title-item-input[type="radio"]:checked
          + label.jnr-tabs-title-item-label {
          color: #f5f6fa;
        }
        label.jnr-tabs-title-item-label {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        i {
          display: flex;
          border-radius: 50%;
          position: absolute;
          justify-content: center;
          align-items: center;
          right: 10%;
          top: 50%;
          transform: translateY(-50%);
          visibility: hidden;
          height: 0.9rem;
          width: 0.9rem;
        }
        &:hover {
          color: #353b48;
        }
        &:hover > i {
          background: #95a5a6;
          color: #f5f6fa;
          visibility: visible;
        }
      }
    } //菜单
    .jnr-dialog {
      background: #fff;
      z-index: 1;
      color: #000;
      border: 1px solid #e4e7ed;
      border-top-left-radius: 5px;
      border-color: #ddd;
      border-top-right-radius: 5px;
      width: 12.7rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      position: absolute;
      font-family: "Fira Code";
      // 第几个就是 2.8rem + 6 * nrem
      left: calc(2.8rem + 6rem);
      top: 2.7rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      .subItem {
        width: 100%;
        .item {
          font-size: 0.78rem;
          box-sizing: border-box;
          width: 100%;
          margin-top: 10px;
          cursor: pointer;
          padding-left: 26px;
          padding-top: 5px;
          padding-bottom: 5px;
          // border: 1px solid red;
          &:hover {
            background: rgb(200, 200, 201);
          }
          &.jnr-disabled {
            color: rgb(162, 165, 169);
            cursor: not-allowed;
          }
        }
      }
      .sperate-1 {
        & > .item:nth-of-type(1n) {
          border-bottom: 1px solid #ddd;
          padding-top: 5px;
        }
      }
      .sperate-2 {
        & > .item:nth-of-type(2n) {
          border-bottom: 1px solid #ddd;
          padding-top: 5px;
        }
      }
      .sperate-3 {
        & > .item:nth-of-type(3n) {
          border-bottom: 1px solid #ddd;
          padding-top: 5px;
        }
      }
      .sperate-4 {
        & > .item:nth-of-type(4n-1) {
          border-bottom: 1px solid #ddd;
          padding-top: 5px;
        }
      }
    }
  }

  .jnr-tabs-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}
</style>