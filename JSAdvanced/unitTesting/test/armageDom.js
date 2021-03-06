
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');



function nuke(selector1, selector2) {
    if (selector1 === selector2) {
        return;
    }
    $(selector1).filter(selector2).remove();
}


describe("ArmageDom Unit tests", function () {
    let targetHtml;
    beforeEach(() => {
        document.body.innerHTML =
            `<div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some <span>more</span> text</span>
                </div>
            </div>`
        targetHtml=$('#target')
    });

    it('with valid and with invalid selector', function () {
        let selector1=$('.inside');
        let selector2=2;
        let oldHtml=targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.be.equal(oldHtml,'Html has changed')
    });
    it('test with two equal selectors ', function () {
        let selector1=$('.inside');
        let oldHtml=targetHtml.html();
        nuke(selector1,selector1);
        expect(targetHtml.html()).to.be.equal(oldHtml,'Html has changed')
    });
    it('with two valid selectors', function () {
        let selector1=$('.nested');
        let selector2=$('.target');
        let oldValue=targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.not.equal(oldValue,'Html did not changed');
    });
    it('with two valid selectors (should not remove anything)', function () {
        let selector1=$('.nested');
        let selector2=$('.inside');
        let oldValue=targetHtml.html();
        nuke(selector1,selector2);
        expect(targetHtml.html()).to.be.equal(oldValue,'Html did not changed');
    });
});