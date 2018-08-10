const app=Sammy('#main', function () {
    this.use("Handlebars", 'hbr');

    //http://localhost:63342/JSApplications/routingAndArchitecture/exampleSammyHandlebarsPartials/#/greet/Lazar

    this.get('#/greet/:name', function (ctx) { //ctx=context
        ctx.loadPartials({
            first_line:'./template1.hbr',
            second_line:'./template2.hbr'
        }).then(function () {
            console.log(this);
            ctx.partials=this.partials;
            ctx.title='Handlebars';
            ctx.name=ctx.params.name;
            ctx.partial('./greeting.hbr');
        })
    })
});
$(()=>{
    app.run();
});