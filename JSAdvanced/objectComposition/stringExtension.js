(function () {
    String.prototype.ensureStart=function(str){
        if(!this.toString().startsWith(str)){
            return str+this.toString()
        }
        return this.toString();
    };
    String.prototype.ensureEnd=function(str){
        if(!this.toString().endsWith(str)){
            return this.toString()+str;
        }
        return this.toString();
    };
    String.prototype.isEmpty=function(){
        return(this.toString().length===0)
    };
    String.prototype.truncate=function(n){
        if(n<4){
            return '.'.repeat(n);
        }
        if(this.toString().length<=n){
            return this.toString();
        }else {
            let sentence=this.toString();
            let tokens=sentence.split(' ');
            if(tokens.length===1){
                return sentence.substr(0,n-3)+'...';
            }else {
                while(tokens.length>1){
                    sentence=sentence.replace(` ${tokens[tokens.length-1]}`,'');
                    if(sentence.length+3<=n){
                        return sentence+'...';
                    }
                    tokens=sentence.split(' ');
                }
            }
        }
    };
    String.format=function(string){
        let args=arguments;
        for(let i = 1; i < args.length; i++){
            let word=args[i];
            if(string.indexOf('{')>0){
                string=string.replace(`{${i-1}}`,`${word}`);
            }
        }
        return string;
    };
})();