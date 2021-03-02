const getters = {
  isCollapse: state => state.menu.isCollapse,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
};
export default getters;
