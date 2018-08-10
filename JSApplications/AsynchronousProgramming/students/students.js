function attachEvents() {
    const basicUrl = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';
    const kinveyAppKey = 'kid_BJXTsSi-e';
    const kinveyAppSecret = '447b8e7046f048039d95610c1b039390';
    const kinveyUserName = 'guest';
    const kinveyPassword = 'guest';
    const base_64 = btoa(kinveyUserName + ":" + kinveyPassword);
    const authHeathers = {
        "Authorization": "Basic " + base_64,
        "Content-type": "application/json"
    }

    $('#create').on('click', createStudent);
    $('#load').on('click', loadStudents)

    function createStudent() {
        let id = $('#id');
        let firstName = $('#firstName');
        let lastName = $("#lastName");
        let facultyNumber = $('#facultyNumber');
        let grade = $('#grade');
        if (id && firstName && lastName && facultyNumber && grade) {
            let newStudent = {
                'ID': Number(id.val()),
                'FirstName': firstName.val(),
                'LastName': lastName.val(),
                'FacultyNumber': facultyNumber.val(),
                'Grade': Number(grade.val())
            }
            $.ajax({
                method: 'POST',
                url: basicUrl,
                headers: authHeathers,
                data: JSON.stringify(newStudent)
            }).then(successSaveStudent).catch(errorHandle)

        }

        function successSaveStudent() {
            id.val('');
            firstName.val('');
            lastName.val('');
            facultyNumber.val('');
            grade.val('');
            loadStudents()
        }
    }

    function loadStudents() {
        $.ajax({
            method: "GET",
            url: basicUrl,
            headers: authHeathers
        }).then(displayStudents).catch(errorHandle)
    }

    function displayStudents(response) {
        let table = $('#results');
        table.empty();
        let body=$('<tbody>');
        body.append($('<tr>')
            .append($('<th>ID</th>'))
            .append($('<th>First Name</th>'))
            .append($('<th>Last Name</th>'))
            .append($('<th>Faculty Number</th>'))
            .append($('<th>Grade</th>')));
        table.append(body);
        let sortedArr = response.sort((a, b) => a['ID'] - b['ID']);
        for (let studentObj of sortedArr) {
                $('table tbody').append($('<tr>')
                    .append($(`<td>${studentObj['ID']}</td>`))
                    .append($(`<td>${studentObj['FirstName']}</td>`))
                    .append($(`<td>${studentObj['LastName']}</td>`))
                    .append($(`<td>${studentObj['FacultyNumber']}</td>`))
                    .append($(`<td>${studentObj['Grade']}</td>`)))
        }
    }

    function errorHandle(err) {
        alert("Error " + err.statusText)
    }


}