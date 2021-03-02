// eslint-disable-next-line no-unused-vars
const state = {
  isCollapse: false
};

// eslint-disable-next-line no-unused-vars
const mutations = {
  updateIsCollapse: state => {
    state.isCollapse = !state.isCollapse;
  },
  //根据传递过来的值设置新值
  updateIsCollapseByNewValue: (state, newVal) => {
    state.isCollapse = newVal;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
