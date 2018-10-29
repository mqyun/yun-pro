import { pub1, alertMaxLoading } from './pub'
import 'jquery'
import axios from 'axios'

$(function () {
  pub1()
  console.log($('.test').text())
  $('body').append(alertMaxLoading())

  axios.post('/test').then(res => {
    console.log(res)
  })

})