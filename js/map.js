DG.then(function() {
    var map,
    clickedElement = document.getElementById('clicked_element'),
    marker_zoom;

    map = DG.map('map', {
        center: [43.804905, 131.942002],
                    zoom: 10,
                    // maxBounds: [
                    //     [40.18, 125.24], 
                    //     [50.28, 145.02]
                    // ],
                    // minZoom: 6,
                    // maxZoom: 17
    });
    DG.control.location({position: 'bottomright'}).addTo(map);

    /* DATABASE */
    pu51 = DG.marker([43.811413143588695, 131.95277452468875]).addTo(map).bindPopup('<p>КГБ ПОУ \"Автомобильно-технический колледж\"<br /> \
г. Уссурийск<br /> \
ул. Пионерская, 92<br /><br /> \
Пн-Пт 09:00-18:00<br /> \
Приёмная комиссия: 8 (4234) 33-95-39<br /> \
<a href="https://pu51.info/" target="_blank">pu51.info</a></p>', {
        maxWidth: 350,
        minWidth: 320
    });
    pu51.bindLabel('КГБ ПОУ \"АТК\"', { static: true });

    uss_dvfu = DG.marker([43.79109424010788, 131.95414781570437]).addTo(map).bindPopup('<p>Дальневосточный Федеральный Университет<br /> \
филиал в г. Уссурийске<br /> \
ул. Чичерина, 54<br /><br /> \
Пн-Пт 08:00-18:00<br /> \
Телефон: 8 (800) 555-08-08<br /> \
<a href="https://www.dvfu.ru/schools/school_of_education/" target="_blank">uss.dvfu.ru</a></p>', {
        maxWidth: 350,
        minWidth: 320
    });
    uss_dvfu.bindLabel('ДВФУ', { static: true });
    
    ussurmc = DG.marker([43.80278774591188, 131.94576859474185]).addTo(map).bindPopup('<p>КГБ ПОУ \"Уссурийский медицинский колледж\"<br /> \
г. Уссурийск<br /> \
ул. Советская, 77<br /><br /> \
Пн-Пт 09:00-17:00<br /> \
Приёмная комиссия: 8 (902) 061-46-23<br /> \
<a href="http://ussurmc.ru/" target="_blank">ussurmc.ru</a></p>', {
        maxWidth: 350,
        minWidth: 320
    });
    ussurmc.bindLabel('КГБ ПОУ \"УМК\"', { static: true });


    /* END DATABASE */
    
    marker_zoom = DG.featureGroup([pu51, uss_dvfu, ussurmc]);
                    marker_zoom.addTo(map);
                    marker_zoom.on('click', function(e) {
                    map.setZoom([13]);
                    map.setView([e.latlng.lat, e.latlng.lng])
                });

    map.on('click', function(e) {
    clickedElement.innerHTML = e.latlng.lat + ', ' + e.latlng.lng;
});
});


