import { pub1, alertMaxLoading } from './pub'
import 'jquery'

$(function () {
  pub1()
  console.log($('.test').text())
  $('body').append(alertMaxLoading())
})