function getModel() {
    let num1;
    let num2;
    let result;
    return{
        init:function (selectorOne,selectorTwo,resultSelector) {
            num1=$(selectorOne);
            num2=$(selectorTwo);
            result=$(resultSelector);
        },
        add:function (selectorOne,selectorTwo,resultSelector) {
            result.val(Number(num1.val())+Number($(num2).val()));
        },
        subtract:function (selectorOne,selectorTwo,resultSelector) {
            result.val(Number(num1.val())-Number($(num2).val()));
        }
    }
}