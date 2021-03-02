<template>
  <div id="app">

    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  mounted() {
    var firstWidth = window.innerWidth
    var secondWidth = 0
    window.onresize = function (el) {
      console.log(
        '是否有样式',
        document
          .getElementById('jnr-open')
          .classList.value.indexOf('el-icon-s-fold')
      )

      console.log(el)
      secondWidth = document.documentElement.clientWidth
      //从大到小并且之前是展开的 并且小于 1024px 则  触发点击事件
      if (
        firstWidth > secondWidth &&
        secondWidth < 1024 &&
        document
          .getElementById('jnr-open')
          .classList.value.indexOf('el-icon-s-fold') != -1
      ) {
        document.getElementById('jnr-open').click()
      } else if (
        //从小变大 并且最后大于 1024px 并且之前是缩放的才展开
        secondWidth > firstWidth &&
        secondWidth >= 1024 &&
        document
          .getElementById('jnr-open')
          .classList.value.indexOf('el-icon-s-fold') === -1
      ) {
        document.getElementById('jnr-open').click()
      }
      //重新赋值
      firstWidth = secondWidth
      //从小到大并且之前是缩放的 触发点击事件
    }

    /* const that = this
    window.onresize = function (el) {
      console.log(el)
      var offsetWidth = document.documentElement.clientWidth
      // var offsetHei = document.documentElement.clientHeight
      if (offsetWidth < 1094 && !that.$store.state.menu.isCollapse) {
        that.$store.commit('menu/updateIsCollapse', true)
        let target = document.getElementById('jnr-open')
        //   //切换为收起
        target.classList.remove('el-icon-s-fold')
        target.classList.add('el-icon-s-unfold')
        //修改对应的左侧导航栏菜单宽度与样式
        document.getElementsByClassName('jnr-asideMenu')[0].style.width = '68px'
        document.getElementById('aside').style.width = '20px'
        document.getElementById('dashboard').style.display = 'none'
      } else {
        that.$store.commit('menu/updateIsCollapse', false)
        let target = document.getElementById('jnr-open')
        target.classList.remove('el-icon-s-unfold')
        target.classList.add('el-icon-s-fold')
        //修改对应的左侧导航栏菜单宽度与样式 为正常状态
        document.getElementsByClassName('jnr-asideMenu')[0].style.width =
          '206px'
        document.getElementById('aside').style.width = '206px'
        document.getElementById('dashboard').style.display = 'block'
      }
    }*/
  },
}
</script>
