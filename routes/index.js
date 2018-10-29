const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/test', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: '请求成功',
    data: [{
      id: 1,
      name: 'test1'
    }, {
      id: 2,
      name: 'test2'
    }, {
      id: 3,
      name: 'test3'
    }]
  }
})

module.exports = router
