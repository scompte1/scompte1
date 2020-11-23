$(function() {

    $("#btn-profil").on("click", affichePhoto);
    $("#btn-forma1").on("click", afficheDescription);
    $("#btn-forma2").on("click", afficheDescription2);
    $("#btn-forma3").on("click", afficheDescription3);
});


// Fonction permettant d'afficher ou de cacher la photo au click du bouton
function affichePhoto ()
{
    $("#photo-profil").toggleClass("d-block mx-auto");
}

function afficheDescription ()
{
    $("#div-descri1").toggleClass("d-block");
}

function afficheDescription2 ()
{
    $("#div-descri2").toggleClass("d-block");
}

function afficheDescription3 ()
{
    $("#div-descri3").toggleClass("d-block");
}