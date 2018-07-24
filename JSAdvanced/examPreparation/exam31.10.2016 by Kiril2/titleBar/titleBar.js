class TitleBar {
    constructor(title) {
        this.title = title;
        this.listLinks = [];
    }

    addLink(href, name) {
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);
        this.listLinks.push(link);
    }

    appendTo(selector) {
        let container = $(selector);
        let headerHtml = $('<header>')
            .addClass('header');
        let titleDiv = $('<div>')
            .addClass('header-row')
            .append($('<a>')
                .addClass('button')
                .html('&#9776;')
                .on('click',function () {
                    //$('div.drawer').toggle();
                    let drawer=$('div.drawer');
                    if(drawer.css('display')==='none'){
                        drawer.css('display','block')
                    }else {
                        drawer.css('display','none')
                    }
                }))
            .append($('<span>')
                .addClass('title')
                .text(this.title));
        let drawerDiv = $('<div>')
            .addClass('drawer');

        let navMenu = $('<nav>').addClass('menu');
            for(let link of this.listLinks){
                navMenu.append(link);
            }
            drawerDiv.append(navMenu);
            headerHtml.append(titleDiv);
            headerHtml.append(drawerDiv);
            container.append(headerHtml);
    }
}