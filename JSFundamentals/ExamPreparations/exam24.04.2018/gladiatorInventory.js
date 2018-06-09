function gladiatorInventory(strArr) {
    let inventory = strArr[0].split(' ');
    for (let i = 0; i < strArr.length; i++) {
        if(inventory[0]===''){
            break;
        }
        let commandTokens = strArr[i].split(' ');
        if (commandTokens[0] === 'Fight') {
            break;
        }
        let equipment = commandTokens[1];
        switch (commandTokens[0]) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    let removedElement = inventory.splice(index, 1);
                    inventory.push(removedElement[0]);
                }
                break;
            case 'Upgrade':
                let upgradeTokens = equipment.split('-');
                equipment = upgradeTokens[0];
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    let upgradedInventory = `${inventory[index]}:${upgradeTokens[1]}`;
                    inventory.splice(index + 1, 0, upgradedInventory);
                }
                break;
            default:
                break;

        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel',
    'Fight!'

]);