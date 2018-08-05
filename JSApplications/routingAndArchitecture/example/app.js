const app=Sammy('#main',function () {   //element selector
    this.get('#/index.html',()=>{       //on this route
        this.swap('<h2>Home page</h2>')   //reload this html
    });
    this.get('#/about',()=>{
        this.swap('<h2>About page</h2>')
    });
    this.get('#/contact',()=>{
        this.swap('<h2>Contact page</h2>')
    });
    // this.route('get','#/about',function () {   //one more way to initialize
    //     this.swap('<h2>Contact page</h2>')
    // });

});
$(()=>{
    app.run();    //start the application
});