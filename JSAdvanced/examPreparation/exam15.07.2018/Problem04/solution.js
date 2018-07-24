function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let counter=0;
    let sum=0;
    let nameBox=$('input.custom-select');
    nameBox.on('input',function () { //change
        $('#submit').attr('disabled',false)
    });
    let priceBox=$('#price');
    let quantityBox=$('#quantity');
    let ulInvertory=$('.display');
    let btnSubmit=$('#submit');
    btnSubmit.on('click',function () {
        let name=$('.custom-select').val();
        let price=$('#price').val();
        let quantity=$('#quantity').val();
        if(name && price>0 && quantity>0){
            let newLi=$(`<li>Product: ${name} Price: ${price} Quantity: ${quantity}</li>`);

            sum+=Number(price);
            $('#sum').val(sum);
            if(counter>=150){
                $('#capacity').addClass('fullCapacity');
                $('#capacity').val("full");
                $('#submit').attr('disabled','true')
                $('.custom-select').attr('disabled','true')
                $('#price').attr('disabled','true');
                $('#quantity').attr('disabled','true');
            }else {
                ulInvertory.append(newLi);
                counter++;
                $('#capacity').val(counter);
            }
            $('.custom-select').val('');
            $('#submit').attr('disabled','true');
            $('#price').val(1);
            $('#quantity').val(1);
        }else{
            $('.custom-select').val('');
            $('#submit').attr('disabled','true');
            $('#price').val(1);
            $('#quantity').val(1);
        }
    });
}
