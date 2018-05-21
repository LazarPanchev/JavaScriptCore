function templateFormat(arr) {
    let result='<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for(let i = 0; i < arr.length; i+=2){
        let question=arr[i];
        let answer=arr[i+1];
        result+=makeXml(question, answer);

        function makeXml(question,answer) {
            let currentXml=' <question>\n';
            currentXml+=`  ${question}\n`;
            currentXml+=' </question>\n <answer>\n';
            currentXml+=`  ${answer}\n`;
            currentXml+=' </answer>\n';
            return currentXml;
        }

    }
    result+='</quiz>';
    return result;
}

console.log(templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]));