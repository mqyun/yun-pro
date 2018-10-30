import yunAxios from '../components/yunAxios/yunAxios'
import yunAlert from '../components/yunAlert/yunAlert'

$(function () {

  yunAxios.post('/test').then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  console.log(pubImgUrl);
})

$(document).on('click', '#testToast', () => {
  let yunAl = new yunAlert({
    position: 'left',
    type: 'error',
    timeout: 100
  });
  yunAl.toast();
})