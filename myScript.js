


var buttonModal = document.getElementById("fixed");
var openModal = document.getElementById("modalPrem");
var closeModal = document.getElementById("closeButton");
var overlay = document.getElementById("myOverlay");

buttonModal.addEventListener('click', showModal, false);


function showModal() {
    openModal.style.display = 'block';
    overlay.style.display = 'block';
};

closeModal.addEventListener('click', removeModal, false);

function removeModal() {
    openModal.style.display = 'none';
    overlay.style.display = 'none';
};

function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

