const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {
  let url = ctx.request.url
  ctx.body = url
})
// console.log(process.env.NODE_ENV)
app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')