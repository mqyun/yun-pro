import './yunLoading.styl'

class yunLoading {

  // parentWrap : 父级节点
  constructor(parentWrap) {
    this.parentWrap = parentWrap || 'body';
  }

  // 初始化loading
  init() {
    let loadingImgUrl = pubImgUrl + '5-121204194114.gif';
    if (this.parentWrap) {
      this.dom = $(
        `<div class="wrapLoadingTip">
          <img src=${loadingImgUrl} />
        </div>`);
    } else {
      this.dom = $(
        `<div class="maxLoadingTip">
          <img src=${loadingImgUrl} />
        </div>`);
    }
    if ($(this.parentWrap).length === 0) {
      console.error('未找到dom：' + this.parentWrap);
    } else {
      $(this.parentWrap).append(this.dom);
    }
  }

  // 移除loading
  remove() {
    this.dom.remove();
  }

}

export default yunLoading