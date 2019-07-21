const tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));
tabBar.listen('MDCTabBar:activated', (event) => {
  const contentHTML = document.querySelectorAll('.mdc-tab-content-item')[event.detail.index];
  contentHTML.scrollIntoView({ behavior: 'smooth' });
})