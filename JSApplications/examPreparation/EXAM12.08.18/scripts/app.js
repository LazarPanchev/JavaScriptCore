$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        function getWelcomePage(ctx) {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/welcomePage.hbs');
            });

        }

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs'
                }).then(function () {
                    this.partial('./templates/forms/registerForm.hbs');
                });

        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            // console.log(username, password, repeatPass);
            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username should be at least 3 characters long and contain only english alphabet letters');
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 characters long and contain only english alphabet letters');
            } else if (repeatPass !== password) {
                notify.showError('Passwords must match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        console.log('send');
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/loginForm.hbs');
            });
        });


        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (username === '' || password === '') {
                notify.showError('All fields should be non-empty!');
            } else if(!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username should be at least 3 characters long and contain only english alphabet letters');
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password should be at least 6 characters long and contain only english alphabet letters');
            }  else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    sessionStorage.clear();
                    notify.showInfo('Logout successful.');
                    ctx.redirect('#/login');
                })
                .catch(notify.handleError);
        });


        this.get('#/catalog', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            cars.getAllCars()
                .then((cars) => {
                    cars.forEach((c, i) => {
                        c.isAuthor = c._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.cars = cars;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        car: './templates/cars/car.hbs',
                    }).then(function () {
                        this.partial('./templates/cars/carListings.hbs');
                    })
                })
                .catch(notify.handleError);

        });

        this.get('#/create/car', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/forms/createCarListingForm.hbs');
            })
        });

        this.post('#/create/car', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            //console.log(ctx);
            let seller=sessionStorage.getItem('username');
            let title=ctx.params.title;
            let description = ctx.params.description;
            let imageUrl = ctx.params.imageUrl;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let fuel = ctx.params.fuelType;
            let year = ctx.params.year;
            let price = ctx.params.price;

            //console.log([seller,title,description,imageUrl,brand,model,fuel,year,price]);

            if (title.length > 33) {
                notify.showError('Title too long!');
            } else if (description.length < 30 ||  description.length > 450 ) {
                notify.showError('Description must be within 30 and 450 characters!');
            } else if (brand.length>11) {
                notify.showError('Brand can not be more than 11 characters!');
            } else if (fuel.length>11) {
                notify.showError('Fuel type can not be more than 11 characters!');
            } else if (model.length<4 || model.length>11) {
                notify.showError('Model must be within 4 and 11 characters!');
            }else if (year.length!==4) {
                notify.showError('Invalid format for year.');
            }else {
                cars.createCar(seller, title, description, imageUrl, brand, model,fuel,year,price)
                    .then(() => {
                        notify.showInfo('listing created.');
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/edit/car/:carId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            let carId = ctx.params.carId;
            cars.getCarById(carId)
                .then((car) => {
                    ctx.isAuth = auth.isAuth();
                    ctx.seller = sessionStorage.getItem('username');
                    ctx.car = car;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/forms/editCarForm.hbs');
                    })
                })
        });

        this.post('#/edit/car', (ctx) => {
            let carId = ctx.params.carId;
            let seller=sessionStorage.getItem('username');
            let title=ctx.params.title;
            let description = ctx.params.description;
            let imageUrl = ctx.params.imageUrl;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let fuel = ctx.params.fuelType;
            let year = ctx.params.year;
            let price = ctx.params.price;

            if (title.length > 33) {
                notify.showError('Title too long!');
            } else if (description.length < 30 ||  description.length > 450 ) {
                notify.showError('Description must be within 30 and 450 characters!');
            } else if (brand.length>11) {
                notify.showError('Brand can not be more than 11 characters!');
            } else if (fuel.length>11) {
                notify.showError('Fuel type can not be more than 11 characters!');
            } else if (model.length<4 || model.length>11) {
                notify.showError('Model must be within 4 and 11 characters!');
            }else if (year.length!==4) {
                notify.showError('Invalid format for year.');
            }else {
                cars.editCar(carId,seller, title, description, imageUrl, brand, model,fuel,year,price)
                    .then(() => {
                        notify.showInfo(`Listing ${title} updated.” `);
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.showError);
            }

        });

        this.get('#/myCars',(ctx)=>{
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            let username=sessionStorage.getItem('username');
            cars.getMyCars(username)
                .then((cars) => {
                    // cars.forEach((c, i) => {
                    //     c.isAuthor = c._acl.creator === sessionStorage.getItem('userId');
                    // });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.cars = cars;

                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        myCar: './templates/cars/myCar.hbs',
                    }).then(function () {
                        this.partial('./templates/cars/myListings.hbs');
                    })
                })
                .catch(notify.handleError);

        })

        this.get('#/delete/car/:carId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let carId = ctx.params.carId;

            cars.deleteCar(carId)
                .then(() => {
                    notify.showInfo('Listing deleted');
                    ctx.redirect('#/catalog');
                })
                .catch(notify.handleError);
        });

        this.get('#/details/:carId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.isAuth = auth.isAuth();
            let carId = ctx.params.carId;
            cars.getCarById(carId)
                .then((car) => {
                    ctx.isAuth = auth.isAuth();
                    ctx.seller = sessionStorage.getItem('username');
                    ctx.car = car;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('./templates/cars/detailsListings.hbs');
                    })
                })
            });
    });

    app.run();
});