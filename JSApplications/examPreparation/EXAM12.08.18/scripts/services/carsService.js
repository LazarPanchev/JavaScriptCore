let cars = (() => {
    function getAllCars() {
        const endpoint = 'cars?query={}&sort={"_kmd.ect": -1}';
        return remote.get('appdata', endpoint, 'kinvey');
    }

    function createCar(seller, title, description, imageUrl, brand, model,fuel,year,price) {
        let data = { seller, title, description, imageUrl, brand, model,fuel,year,price };

        return remote.post('appdata', 'cars', 'kinvey', data);
    }

    function getCarById(carId) {
        const endpoint = `cars/${carId}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function editCar(carId,seller, title, description, imageUrl, brand, model,fuel,year,price) {
        const endpoint = `cars/${carId}`;
        let data = {seller, title, description, imageUrl, brand, model,fuel,year,price};

        return remote.update('appdata', endpoint, 'kinvey', data);
    }

    function deleteCar(carId) {
        const endpoint = `cars/${carId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getMyCars(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }



    return {
        getAllCars,
        createCar,
        getCarById,
        editCar,
        getMyCars,
        deleteCar,
        // getPostById,
        // getMyPosts
    }
})();