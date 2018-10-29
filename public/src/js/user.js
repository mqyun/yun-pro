import yunAxios from '../components/yunAxios/yunAxios'

$(function () {
  yunAxios.post('/test').then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
  console.log(pubImgUrl);
})