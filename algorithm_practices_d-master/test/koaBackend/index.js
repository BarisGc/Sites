const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
let router = Router();
// response

router.get('/', (ctx) => {
    ctx.body = '<h1>index sayfasina hos geldiniz</h1>'
    ctx.response.status = 203
});

router.get('/hakkinda', (ctx) => {
    ctx.body = '<h1>Hakkimda sayfasina hos geldiniz</h1>'
    ctx.response.status = 204
});

router.get('/iletisim', (ctx) => {
    ctx.body = '<h1>Iletisim sayfasina hos geldiniz</h1>'
});

app.use(router.routes());
const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});


