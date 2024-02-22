const equipesLigue1 = [
    { nom: "Paris-SG", lat: 48.8566, lng: 2.3522, classement: "1er - 53pts" },
    { nom: "Brest", lat: 48.3904, lng: -4.4861, classement: "2e - 40pts" },
    { nom: "Paris-SG", lat: 48.8566, lng: 2.3522, classement: "1er - 53pts" },
    { nom: "Brest", lat: 48.3904, lng: -4.4861, classement: "2e - 40pts" },
    { nom: "Nice", lat: 43.7009, lng: 7.2683, classement: "3e - 39pts" },
    { nom: "Lille", lat: 50.6292, lng: 3.0573, classement: "4e - 38pts" },
    { nom: "Monaco", lat: 43.7384, lng: 7.4246, classement: "5e - 38pts" },
    { nom: "Lens", lat: 50.4319, lng: 2.7987, classement: "6e - 36pts" },
{ nom: "Rennes", lat: 48.1173, lng: -1.6778, classement: "7e - 34pts" },
{ nom: "Reims", lat: 49.2628, lng: 4.0347, classement: "8e - 31pts" },
{ nom: "Marseille", lat: 43.2965, lng: 5.3698, classement: "9e - 30pts" },
{ nom: "Strasbourg", lat: 48.5734, lng: 7.7521, classement: "10e - 25pts" },
{ nom: "Lyon", lat: 45.7640, lng: 4.8357, classement: "11e - 25pts" },
{ nom: "Le Havre", lat: 49.4944, lng: 0.1079, classement: "12e - 24pts" },
{ nom: "Toulouse", lat: 43.6045, lng: 1.4442, classement: "13e - 23pts" },
{ nom: "Montpellier", lat: 43.6108, lng: 3.8767, classement: "14e - 22pts" },
{ nom: "Lorient", lat: 47.7485, lng: -3.3702, classement: "15e - 22pts" },
{ nom: "Nantes", lat: 47.2184, lng: -1.5536, classement: "16e" }, 
{ nom: "Metz", lat: 49.1193, lng: 6.1757, classement: "17e" }, 
{ nom: "Clermont", lat: 45.7772, lng: 3.0870, classement: "18e" } 
];

const equipesLigue2 = [
    { nom: "Auxerre", lat: 47.7982, lng: 3.5672, classement: "1er - 50pts" },
    { nom: "Angers", lat: 47.4784, lng: -0.5632, classement: "2e - 46pts" },
    { nom: "Laval", lat: 48.0674, lng: -0.7669, classement: "3e - 41pts" },
    { nom: "Grenoble", lat: 45.1885, lng: 5.7245, classement: "4e - 40pts" },
    { nom: "Saint-Étienne", lat: 45.4397, lng: 4.3872, classement: "5e - 38pts" },
    { nom: "AC Ajaccio", lat: 41.9267, lng: 8.7369, classement: "6e - 37pts" },
    { nom: "Caen", lat: 49.1829, lng: -0.3707, classement: "7e - 36pts" },
    { nom: "Amiens", lat: 49.8942, lng: 2.2957, classement: "8e - 36pts" },
    { nom: "Rodez", lat: 44.3516, lng: 2.5734, classement: "9e - 35pts" },
    { nom: "Guingamp", lat: 48.5615, lng: -3.1494, classement: "10e - 35pts" },
    { nom: "Paris FC", lat: 48.8566, lng: 2.3522, classement: "11e" },
{ nom: "Pau", lat: 43.2951, lng: -0.3708, classement: "12e" }, 
{ nom: "Bordeaux", lat: 44.8378, lng: -0.5795, classement: "13e" }, 
{ nom: "Concarneau", lat: 47.8750, lng: -3.9222, classement: "14e" }, 
{ nom: "Bastia", lat: 42.6976, lng: 9.4509, classement: "16e" }, 
{ nom: "Dunkerque", lat: 51.0344, lng: 2.3773, classement: "17e" }, 
{ nom: "QRM", lat: Coordonnées, lng: Coordonnées, classement: "18e" }, 
{ nom: "Annecy", lat: 45.8992, lng: 6.1289, classement: "19e" }, 
{ nom: "Valenciennes", lat: 50.3571, lng: 3.5238, classement: "20e" } 
];

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 46.2276, lng: 2.2137 },
        zoom: 5
    });

    // Ajoutez les marqueurs pour les équipes de Ligue 1
    equipesLigue1.forEach(function(equipe) {
        var marker = new google.maps.Marker({
            position: { lat: equipe.lat, lng: equipe.lng },
            map: map,
            title: equipe.nom,
            icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" }
        });

        var infowindow = new google.maps.InfoWindow({
            content: equipe.nom + " - Classement : " + equipe.classement
        });

        marker.addListener('mouseover', function() {
            infowindow.open(map, marker);
        });
    });

    // Ajoutez les marqueurs pour les équipes de Ligue 2
    equipesLigue2.forEach(function(equipe) {
        var marker = new google.maps.Marker({
            position: { lat: equipe.lat, lng: equipe.lng },
            map: map,
            title: equipe.nom,
            icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" }
        });

        var infowindow = new google.maps.InfoWindow({
            content: equipe.nom + " - Classement : " + equipe.classement
        });

        marker.addListener('mouseover', function() {
            infowindow.open(map, marker);
        });
    });
}