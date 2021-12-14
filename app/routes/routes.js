module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/start', (req, res) => {
        res.render('start');
    });

    app.get('/other-benefits', (req, res) => {
        res.render('other-benefits');
    });

    app.get('/create-account', (req, res) => {
        res.render('create-account');
    });

    app.get('/about-you', (req, res) => {
        res.render('about-you');
    });

    app.post('/about-you', (req, res) => {
        let matches = true;
        // {
        //     firstname: 'Duncan',
        //     middlename: 'Those',
        //     lastname: 'Biscuits',
        //     'dob-day': '',
        //     'dob-month': '',
        //     'dob-year': '',
        //     email: 'im_in_your_teacup@chocolatehobnob.com'
        //   }
        if(res.locals.userDetails.names[0] !== req.body.firstname) {
            matches = false;
        }
        if(res.locals.userDetails.names[1] !== req.body.middlename) {
            matches = false;
        }
        if(res.locals.userDetails.names[2] !== req.body.lastname) {
            matches = false;
        }
        if(res.locals.userDetails.dateOfBirth[0] !== req.body['dob-day']) {
            matches = false;
        }
        if(res.locals.userDetails.dateOfBirth[1] !== req.body['dob-month']) {
            matches = false;
        }
        if(res.locals.userDetails.dateOfBirth[2] !== req.body['dob-year']) {
            matches = false;
        }
        if(res.locals.userDetails.email !== req.body.email) {
            matches = false;
        }
        return res.redirect(`/2fa?user=${res.locals.user}&matches=${matches}`);
    });

    app.get('/2fa', (req, res) => {
        return res.render('2fa');
    });

    app.get('/address', (req, res) => {
        res.render('address');
    })
    
    app.all('*', (req, res) => {
        res.status(404).send('Not found');
    });

    return app;
}