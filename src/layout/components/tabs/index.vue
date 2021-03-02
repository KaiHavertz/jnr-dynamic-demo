<template>
  <div class="jnr-layout-tabs">
    <!-- <el-tag v-for="tab in tabs"
            :key="tab.name"
            :type="tab.type"
            @click="tabClick(tab)"
            :closable="tab.applyClose"
            @close="handleClose(tab)">
      <router-link style="color:#333"
                   :to="{ path: tab.path,  fullPath: tab.fullPath }"
                   :id="tab.fullPath">
        {{ tab.name }}
      </router-link>
    </el-tag> -->
    <el-tabs v-model="currentTab"
             type="card"
             closable
             class="jnr-el-tabs"
             @tab-click="tabClick"
             @tab-remove="removeTab">
      <el-tab-pane v-for="tab in tabs"
                   :key="tab.name"
                   :label="tab.name"
                   :name="tab.name">
        <router-link style="color:#333"
                     :to="{ path: tab.path,  fullPath: tab.fullPath }"
                     :id="tab.fullPath">
        </router-link>
        <div>{{ tab.labelContent }}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'layout-tabs',
  data() {
    return {
      //如果缓存不为空的话从中取出
      tabs: JSON.parse(sessionStorage.getItem('tabs')) || [
        //初始值为首页
        {
          path: '/dashboard',
          name: '首页',
          type: '',
          fullPath: '/dashboard',
          applyClose: false,
        },
      ],
      //当前选中的name
      radio: '首页',
      //当前选中的,从临时缓存中取出，避免刷新后不见
      currentTab: sessionStorage.getItem('currentTab'),
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log('to:', to, 'from:', from)
        //其他设置为未选中的状态
        this.tabs.forEach((element) => {
          element.type = 'info'
        })
        if (!this.isExists(to.fullPath)) {
          this.tabs.push({
            name: to.name,
            type: '',
            path: to.path,
            fullPath: to.fullPath,
            applyClose: to.meta.applyClose,
          })
        } else {
          //设置当前选中的样式
          const index = this.tabs.indexOf({
            name: to.name,
            type: '',
            path: to.path,
            fullPath: to.fullPath,
            applyClose: to.meta.applyClose,
          })
          try {
            this.tabs[index].type = ''
          } catch (error) {
            console.log('溢出了:', error)
          }

          console.log('已经展开了')
        }
        //设置当前选中的 currentTab
        sessionStorage.setItem('currentTab', to.name)
        this.currentTab = to.name
        console.log('路由发生变化')
      },
    },
    tabs: {
      handler(val) {
        console.log('tabs:', val)
        if (val) {
          //给其设置新的缓存值
          sessionStorage.setItem('tabs', JSON.stringify(val))
          sessionStorage.setItem('currentTab', val.name)
          this.currentTab = sessionStorage.getItem('currentTab')
        }
      },
    },
  },
  mounted() {
    //  const that = this
    window.onbeforeunload = function (e) {
      console.log('重新加载', e)
    }
  },
  destroyed() {
    //清除缓存
    sessionStorage.clear()
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.tabs
      let activeName = this.currentTab
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.currentTab = activeName
      this.tabs = tabs.filter((tab) => tab.name !== targetName)
    },
    tabClick(item) {
      console.log('item:', item)
      sessionStorage.setItem('currentTab', item.name)
    },
    handleClose(tab) {
      this.tabs.splice(this.tabs.indexOf(tab), 1)
      // //回退到最后一个中
      // //如果没有的话，就回到首页
      console.log('this.tabs ', this.tabs)

      if (!this.tabs || this.tabs.length == 0) {
        this.$router.push({
          path: '/dashboard',
          query: { id: 1 },
        })
      }
      //否则回到前一个
      else {
        /*const that = this
        this.$router.push({
          path: that.tabs[that.tabs.length - 1].path,
          query: { id: 1 },
        })*/
        document
          .getElementById(this.tabs[this.tabs.length - 1].fullPath)
          .click()
        console.log('被点击！！！1')
        //设置当前选中的
      }
    },
    //是否已经打开过了
    isExists(path) {
      for (var i = 0; this.tabs, i < this.tabs.length; i++) {
        if (this.tabs[i].path == path) return true
      }
      return false
    },
  },
}
</script>
<style lang="less" scoped>
.jnr-layout-tabs {
  margin-top: 14px !important;
  .jnr-el-tabs {
    margin: 0 !important;
  }
  label {
    color: #555;
  }
  input[type='radio']:checked + label {
    color: #42b983;
    background: red;
  }
  .el-tabs__content {
    width: 0 !important;
  }
  .el-tabs__item {
    height: 100% !important;
  }
  .jnr-tab {
    border: 1px solid #ddd;
    height: 98%;
    padding: 10px;
  }
}
@media screen and (max-width: 582px) {
  .jnr-layout-tabs {
    display: none;
  }
}
</style>