const app=Sammy(function () {   //element selector
    this.post('#/login', (context)=>{
        console.log(context.params.user);
        console.log(context.params.pass);
    })
});
$(()=>{
    app.run();    //start the application
});