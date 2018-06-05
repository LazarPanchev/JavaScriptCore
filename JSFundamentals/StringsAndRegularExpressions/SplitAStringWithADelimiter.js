function split(str,delimiter) {

    let result=str.split(delimiter);
    console.log(result.join('\n'));
}
split('One-Two-Three-Four-Five','-');