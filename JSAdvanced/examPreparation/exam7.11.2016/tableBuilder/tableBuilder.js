function tableBuilder(selector) {
    function createTable(columnNames) {
        let targetElement=$(selector);
        targetElement.empty();
        let table=$('<table>');
        let tableRow=$('<tr>');
        for(let column of columnNames){
            let tableHeader=$('<th>');
            tableHeader.text(column);
            tableRow.append(tableHeader);
        }
        let action=$('<th>').text('Action');
        tableRow.append(action);
        table.append(tableRow);
        targetElement.append(table);

    }
    function fillData(dataRows) {
        let table=$(`${selector} table`);
        for(let dataRow of dataRows){
            let tableRow=$('<tr>');
            for(let element of dataRow){
                let tableData=$('<td>');
                tableData.text(element);
                tableRow.append(tableData);
            }
            let deleteBtn=$('<td><button>Delete</button></td>');
            deleteBtn.on('click',function () {
                $(this).parent().remove();
            });
            tableRow.append(deleteBtn);
            table.append(tableRow);
        }
    }
    return{
        createTable,
        fillData
    }
}