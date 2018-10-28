// 初始化接口返回
function initRes() {
  return {
    code: 0,
    message: 'success'
  }
}

// 修改接口返回
function errRes(response, code, message, err) {
  response.code = code;
  response.message = message;
  response.err = err;
}

module.exports = {
  initRes,
  errRes
}