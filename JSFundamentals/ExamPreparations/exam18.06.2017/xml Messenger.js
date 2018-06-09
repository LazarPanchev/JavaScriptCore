function xmlMessenger(input) {
    let match = /<message((?:\s[a-z]+="[A-Za-z0-9 .]+")+)>([\s\S]+)<\/message>$/.exec(input);
    if(match !== null){
        let attributes=match[1];
        let message=match[2];
        let regexTo=/\bto="([A-Za-z0-9 .]+)"/;
        let regexFrom=/\bfrom="([A-Za-z0-9 .]+)"/;
        let toMatch=regexTo.exec(attributes);
        let fromMatch=regexFrom.exec(attributes);
        if(toMatch!==null  && fromMatch!==null){
            let result=`<article>\n  <div>From: <span class="sender">${fromMatch[1]}</span></div>\n`;
            result+=`  <div>To: <span class="recipient">${toMatch[1]}</span></div>\n  <div>\n`;
            let messages=match[2].split('\n');
            for(let i = 0; i < messages.length; i++){
                result+=`    <p>${messages[i]}</p>\n`;
            }
            result+='  </div>\n</article>';
            console.log(result);


        }else{
            console.log('Missing attributes');
        }
    }else{
        console.log('Invalid message format');
    }
}

xmlMessenger("<message to=\"Bob\" from=\"Alice\" timestamp=\"1497254092\">Hey man, what's up?</message>");

