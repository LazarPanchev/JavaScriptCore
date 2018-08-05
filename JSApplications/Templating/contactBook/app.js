(async() => {
        //show contacts
    let data=await $.get('./data.json');
    let obj={
        contacts: data
    };
    let templateHtml=await $.get('./templates/contactTemplate.hbs');
    let template=Handlebars.compile(templateHtml);
    let result=template(obj);
    $('#list').append(result);

        //show details
    $('div .contact')
        .on('click',addEventListener);

    async function addEventListener(){
        $('div .content>div').removeClass('selected');
        $(this).addClass('selected');
        $('div.info').remove();
        let index=$(this).attr('data-id');
        let currEl=data[index];
        let partialInfo=await $.get('./templates/partialInfo.hbs');
        let partialContent=await $.get('./templates/partialContent.hbs');
        let detailsHtml=await $.get('./templates/details.hbs');
        let template=Handlebars.compile(detailsHtml);
        Handlebars.registerPartial('partialInfo',partialInfo);
        Handlebars.registerPartial('partialContent',partialContent);
        let result=template(currEl);
        $('#book').append(result);
    }
})();