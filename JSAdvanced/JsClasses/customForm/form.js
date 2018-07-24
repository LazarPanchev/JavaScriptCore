let result=(function () {
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
    class Form{
        constructor(){
            this.element=$('<div>').addClass('form');
            this.textboxes=arguments;
        }
        get textboxes(){
            return this._textboxes;
        }
        set textboxes(args){
            for(let i = 0; i < args.length; i++){
                if(!args[i] instanceof Textbox){
                    throw new Error('Invalid parameter!')
                }
            }
            this._textboxes=args;
            for(let textbox of this.textboxes){
                for(let el of textbox.elements){
                    this.element.append($(el));
                }
            }
        }
        get element(){
            return this._element;
        }
        set element(element){
            this._element=element;
        }
        submit(){
            let allValid=true;
            for(let textbox of this.textboxes){
                if(textbox.isValid()){
                    for(let el of textbox.elements){
                        $(el).css('border', '2px solid green')
                    }
                }else {
                    for(let el of textbox.elements){
                        $(el).css('border', '2px solid red')
                    }
                    allValid=false;
                }
            }
            return allValid;
        }
        attach(selector){
            $(selector).append(this.element);
        }


    }
    return{
        Textbox:Textbox,
        Form:Form
    }
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");

