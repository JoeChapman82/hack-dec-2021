require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressNunjucks = require('express-nunjucks');
const favicon = require('serve-favicon');
const routes = require('./app/routes/routes');
const app = express();
const PORT = process.env.PORT;
app.use(favicon(path.join(process.cwd(), '/app/assets/images', 'favicon.ico')));
app.use(express.static(path.join(process.cwd(), '/app/assets/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'njk');
app.set('views', __dirname + '/app/views');

const njk = expressNunjucks(app, {
    autoescape: true,
    watch: false,
    noCache: false
});

app.use((req, res, next) => {
    res.locals.user = req.query.user;
    res.locals.matches = req.query.matches;
    res.locals.userDetails = {
        names: ["Duncan", "Those", "Biscuits"],
        dateOfBirth: ["23", "04", "1996"],
        address: [
            "17 Custard Cream Street",
            "Oreoville",
            "Bourbon",
            "AB1 1BA",
            "UK"
        ],
        email: "im_in_your_teacup@chocolatehobnob.com"
    }
    return next();
})

routes(app);

app.listen(PORT, () => {
    console.log(`Express app listening on ${PORT}`);
})