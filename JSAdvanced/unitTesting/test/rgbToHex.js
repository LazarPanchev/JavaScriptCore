const expect=require('chai').expect;

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}



describe('rgbToHexColor(red,green,blue) function', function () {
    describe('Normal cases(valid input)', function () {
        it('should return #030507 on (3,5,7)',function () {
            let actualResult=rgbToHexColor(3,5,7);
            let expectedResult='#030507';
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return #FF9EAA on (255,158,170)',function () {
            let actualResult=rgbToHexColor(255,158,170);
            let expectedResult='#FF9EAA';
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return #FFFFFF on (255,255,255)',function () {
            let actualResult=rgbToHexColor(255,255,255);
            let expectedResult='#FFFFFF';
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return #FFFFFF on (0,0,0)',function () {
            let actualResult=rgbToHexColor(0,0,0);
            let expectedResult='#000000';
            expect(actualResult).to.be.equal(expectedResult)
        })
    });
    describe('Special cases(invalid input)', function () {
        it('should return undefined on (-3,5,7)',function () {
            let actualResult=rgbToHexColor(-3,5,7);
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return undefined on (255,-158,170)',function () {
            let actualResult=rgbToHexColor(255,-158,170);
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return undefined on (233,158,-170)',function () {
            let actualResult=rgbToHexColor(233,158,-170);
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return undefined on (2339,1587,1770)',function () {
            let actualResult=rgbToHexColor(2339,1587,1770);
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return undefined on (2,5)',function () {
            let actualResult=rgbToHexColor(2,5);
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return undefined on string',function () {
            let actualResult=rgbToHexColor('pesho');
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return undefined on (2,54,gogo)',function () {
            let actualResult=rgbToHexColor(2,54,'gogo');
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        });
        it('should return undefined on ()',function () {
            let actualResult=rgbToHexColor();
            let expectedResult=undefined;
            expect(actualResult).to.be.equal(expectedResult)
        })
    });
});