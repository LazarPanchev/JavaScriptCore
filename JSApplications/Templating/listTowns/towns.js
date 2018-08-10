function attachEvents() {
    $('#btnLoadTowns').on('click',function () {
        let rootContainer=$('#root');
        rootContainer.empty();
        let towns=$('#towns').val().split(', ').map(str=>({"townName":str}));
        let obj={towns:towns};
        let html=$('#towns-template').html();
        let template=Handlebars.compile(html);
        let result=template(obj);
        rootContainer.append(result)
    })
}