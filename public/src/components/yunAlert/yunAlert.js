import './yunAlert.styl'

class yunAlert {

  constructor(obj) {
    obj = obj || {};
    this.id = '';
    this.title = obj.title || '';
    this.message = obj.message || '';
    this.type = obj.type || 'success';
    // timeout
    this.timeout = isNaN(obj.timeout) ? 1200 : (obj.timeout>300 ? (obj.timeout - 300) : 300);
    // position ===>>> [top || bottom || left || right]
    let initPositionArr = ['top', 'bottom', 'left', 'right'];
    if (initPositionArr.indexOf(obj.position) === -1) {
      this.position = 'fixed-top';
    } else {
      this.position = 'fixed-' + obj.position;
    }
    // toast基本主题样式 <==> type ===>>> [success || warning || error]
    switch (this.type) {
      case 'success':
        this.backgroundColor = 'green';
        break;
      case 'warning':
        this.backgroundColor = 'yellow';
        break;
      case 'error':
        this.backgroundColor = 'red';
        break;
      default:
        this.backgroundColor = 'green';
    }
  }

  toast() {
    this.id = Date.parse(new Date()) / 1000 + Math.floor(Math.random() * (1 - 1000) + 1000);
    this.dom = $(
      `<div class="toast-box ${this.position}"
        data-toastid="${this.id}"
        style="background: ${this.backgroundColor};">
      </div>`);
    $('body').append(this.dom);
    this.dom.fadeIn(300);
    setTimeout(() => {
      this.remove();
    }, this.timeout);
  }

  remove() {
    this.dom.fadeOut(300);
    setTimeout(() => {
      this.dom.remove();
    }, 300);
    delete this
  }
}

export default yunAlert