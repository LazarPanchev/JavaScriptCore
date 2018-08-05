$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        //GET HOME PAGE
        this.get('/index.html', displayHome);

        this.get('#/home', displayHome);

        function displayHome(ctx) {    //ctx equal to this
            //hang on ctx properties
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;   //check user is logged in to show username on the front page!
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/home/home.hbs')  //reload main hbs
            })
        }

        //GET ABOUT PAGE
        this.get('#/about', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/about/about.hbs')  //reload main hbs
            })
        });

        //GET LOGIN PAGE
        this.get('#/login', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs')  //reload main hbs
            })
        });

        //GET REGISTER PAGE
        this.get('#/register', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs'
            }).then(function (context) {
                this.partial('./templates/register/registerPage.hbs')  //reload main hbs
            })
        });

        //GET LOGOUT
        this.get('#/logout', function (context) {
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    auth.showInfo('LOGGED OUT!');
                    displayHome(context);
                }).catch(function (err) {
                auth.handleError(err)
            })
        });

        //GET CATALOG PAGE
        this.get('#/catalog', displayCatalog);

        function displayCatalog(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            teamsService.loadTeams()
                .then(function (allTeams) {
                    ctx.hasNoTeam = sessionStorage.getItem('teamId') === null
                        || sessionStorage.getItem('teamId') === "undefined";
                    ctx.teams = allTeams;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        team: './templates/catalog/team.hbs',
                    }).then(function () {
                        this.partial('./templates/catalog/teamCatalog.hbs')  //reload main hbs
                    })
                }).catch(auth.handleError);

        }

        //GET CREATE TEAM PAGE
        this.get('#/create', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs')  //reload main hbs
            })
        });

        //GET DETAILS PAGE
        this.get('#/catalog/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);      //to cut first symbol(:) ->  :6756537373
            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.teamId = teamId;
                    ctx.name=teamInfo.name;
                    ctx.comment=teamInfo.comment;
                    ctx.isOnTeam=teamInfo._id===sessionStorage.getItem('teamId');
                    ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem('userId');
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        teamControls: './templates/catalog/teamControls.hbs'
                    }).then(function () {
                        this.partial('./templates/catalog/details.hbs')
                    })
                }).catch(auth.handleError);
        });

        // JOIN TEAM (BY ID)
        this.get('#/join/:id', function (ctx) {
            let teamId = ctx.params.id.substr(1);      //to cut first symbol(:) ->  :6756537373
            teamsService.joinTeam(teamId)
                .then(function (userInfo) {
                   auth.saveSession(userInfo);
                   auth.showInfo('YOU JOINED THE TEAM!')
                   displayCatalog(ctx)
                }).catch(auth.handleError);
        });

        // LEAVE TEAM
        this.get('#/leave', function (ctx) {
            teamsService.leaveTeam()
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('LEFT THE TEAM!');
                    displayCatalog(ctx)
                }).catch(auth.handleError);
        });

        // GET EDIT TEAM PAGE
        this.get('#/edit/:id', function (ctx) {
            let teamId=ctx.params.id.substr(1);
            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.teamId=teamInfo;
                    ctx.name=teamInfo.name;
                    ctx.comment=teamInfo.comment;
                    ctx.loadPartials({
                        header: './templates/common/header.hbs',
                        footer: './templates/common/footer.hbs',
                        editForm: './templates/edit/editForm.hbs'
                    }).then(function () {
                        this.partial('./templates/edit/editPage.hbs')
                    })
                }).catch(auth.handleError);
        });

        // DELETE TEAM
        this.get('#/delete/:id', function (ctx) {
            let teamId=ctx.params.id.substr(1);
            teamsService.deleteTeam(teamId)
                .then(function () {
                    auth.showInfo(`TEAM DELETED!`);
                    displayCatalog(ctx)
                }).catch(auth.handleError);
        });

        // POST / UPDATE TEAM
        this.post('#/edit/:id', function (ctx) {
            let teamId=ctx.params.id.substr(1);
            console.log(ctx);
            let teamName=ctx.params.name;
            let teamComment=ctx.params.comment;
            teamsService.edit(teamId,teamName,teamComment)
                .then(function (teamInfo) {
                    auth.showInfo(`TEAM ${teamName} EDITED!`);
                    displayCatalog(ctx)
                }).catch(auth.handleError);
        });

        //POST LOGIN
        this.post('#/login', function (context) {                 //context from sammy with params
            let username = context.params.username;              //name from params from form
            let password = context.params.password;              //password from params from form
            auth.login(username, password)
                .then(function (userInfo) {                      //user Info -  after jQuery post request for login
                    auth.saveSession(userInfo);                  //save session
                    auth.showInfo('LOGGED IN!');                 //message
                    displayHome(context)                         //redirect to home
                }).catch(function (err) {
                auth.showError('Wrong username or password!')
                // auth.handleError(err)
            })
        });

        //POST REGISTER
        this.post('#/register', function (context) {
            let username = context.params.username;
            let password = context.params.password;
            let repeatPassword = context.params.repeatPassword;
            if (password !== repeatPassword) {
                auth.showError('PASSWORDS DO NOT MATCH!');
                $('#repeatPassword').val('');
            } else {
                auth.register(username, password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo('Registration successful!');
                        displayHome(context);
                    }).catch(function (err) {
                    auth.handleError(err)
                })
            }
        });

        //POST/CREATE TEAM IN CATALOG
        this.post('#/create', function (context) {
            let teamName = context.params.name;
            let comment = context.params.comment;
            teamsService.createTeam(teamName, comment)
                .then(function (teamInfo) {       //after create a team we want to join immediately join to the team!
                    teamsService.joinTeam(teamInfo._id)
                        .then(function (userInfo) {   //returns the userInfo
                            auth.saveSession(userInfo);
                            auth.showInfo(`TEAM ${teamName} CREATED!`);
                            displayCatalog(context);
                        }).catch(auth.handleError)
                }).catch(auth.handleError)
        });


    });

    app.run();
});