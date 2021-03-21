DG.then(function() {
    var map,
    clickedElement = document.getElementById('clicked_element');

    map = DG.map('map', {
        center: [43.811413143588695, 131.95277452468875],
                    zoom: 15,
                    minZoom: 6,
                    maxZoom: 17,
                    fullscreenControl: false,
    });

    pu51 = DG.marker([43.811413143588695, 131.95277452468875]).addTo(map).bindPopup('<p>КГБ ПОУ \"Автомобильно-технический колледж\"<br /> \
г. Уссурийск<br /> \
ул. Пионерская, 92<br /><br /> \
Специальность: Информационные системы и программирование<br /> \
<a href="https://pu51.info/" target="_blank">pu51.info</a></p>', {
        maxWidth: 350,
        minWidth: 300
    });
    pu51.bindLabel('Место учёбы автора', { static: true });
});


