class Textbox {
    constructor(selector,regex) {
        this.elements=selector;
        this.invalidSymbols=regex;
        this.value=$(this.elements[0]).val();
        this.onInput();
    }
    onInput(){
        this.elements.on('input', (event)=>{
            this.value=$(event.target).val();
        })
    }
    get value(){
        return this._value;
    }
    set value(text){
        this._value=text;
        for(let el of this.elements){
            $(el).val(text);
        }
    }
    get elements(){
        return this._elements;
    }
    set elements(selector){
        this._elements=$(selector);
    }
    get invalidSymbols(){
        return this._invalidSymbols;
    }

    set invalidSymbols(regex){
        this._invalidSymbols=regex;
    }
    isValid(){
        return !this.invalidSymbols.test(this.value);
    }

}
let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');
inputs.on('input',function(){console.log(textbox.value);});