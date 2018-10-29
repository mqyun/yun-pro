const pub1 = () => {
  console.log('main1')
}

// loading
const alertMaxLoading = () => {
  let oDiv = $('<div class="maxLoadingTip"><img src="/src/images/5-121204194114.gif" /></div>');
  return oDiv
}

export {
  pub1,
  alertMaxLoading
}