$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        let html=$('#cat-template').html();
        let template=Handlebars.compile(html);
        let newObj={cats:window.cats};
        let result=template(newObj);
        $('body').append(result);

        $('.btn').on('click',function () {
           let cardHolder=($(this).parent());
           let div=cardHolder.find('div');
           div.toggle()
        })
    }
});
