window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDegree = document.querySelector('.temperature-degree');
    let temperatureFeeling = document.querySelector('.temperature-feeling');
    let locationName = document.querySelector('.location-timezone');
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureIcon = document.querySelector('.location-icon');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(postion => {
            long = postion.coords.longitude;
            lat = postion.coords.latitude;
            fetch('https://api.weatherapi.com/v1/current.json?key=f591d6bf2e224e4cb26194646210510&q=42.4349,-8.643&aqi=no')
                .then(response => response.json())
                .then(data => {
                    const {temp_c, feelslike_c} = data.current;
                    const { name } = data.location;
                    const { text, icon } = data.current.condition;
                    temperatureDegree.textContent = temp_c;
                    temperatureFeeling.textContent = feelslike_c;
                    locationName.textContent = name;
                    temperatureDescription.textContent = text;
                    temperatureIcon.src = icon;
                })
        });
    }else{
        console.log("error with navigatior.gelocation");
    }
});