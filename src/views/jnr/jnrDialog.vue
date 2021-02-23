// 我的弹出菜单组件
<template>
  <!-- sperate-3: 默认的边线类，从1到4可取，默认3 -->
  <div class="jnr-dialog-div" :data-count="dataCount">
    <main class="slot-subItem sperate-4">
      <slot name="subItem"
        ><div class="item" @click="handleSubItem">关闭左侧所有关闭左侧所有</div>
        <div class="item" @click="handleSubItem">关闭右侧所有</div>
        <div class="item" @click="handleSubItem">关闭所有</div>
        <div class="item" @click="handleSubItem">关闭所有</div>
        <div class="item" @click="handleSubItem">关闭所有</div>
        <div class="item" @click="handleSubItem">关闭所有</div>
        <div class="item" @click="handleSubItem">关闭所有</div>
        <div class="item" @click="handleSubItem">关闭所有</div>
        <div class="item" @click="handleSubItem">关闭所有</div>
        <div class="jnr-disabled item">关闭所有</div>
      </slot>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    dataCount: Number, //条数
  },
  //   事件
  methods: {
    //   点击事件
    handleSubItem() {
      console.log("我被点击了");
    },
  },
};
</script>
<style lang="less" scoped>
.jnr-dialog-div {
  @separate:attr (data-separate);
  @data-count: attr(data-count);
  background: #fff;
  z-index: 2;
  font-size: 12px;
  color: #000;
  border: 1px solid #e4e7ed;
  border-top-left-radius: 5px;
  border-color: #ddd;
  border-top-right-radius: 5px;
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  font-family: "Fira Code";
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  .slot-subItem {
    width: 100%;
    .item {
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
</style>