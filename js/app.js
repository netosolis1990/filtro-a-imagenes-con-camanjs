var im;
$(document).ready(function() {
    im = 'image2.jpg';
    //Inicializamos el div para la camara, con el tamaño y el tipo de imagen
    setTimeout(function(){
        Webcam.set({
        width: $('#foto').width(),
        height: $('#foto').height(),
        image_format: 'jpeg',
        jpeg_quality: 90
        });
        //Asignamos el id del div que utilizaremos para la webcam
        Webcam.attach( '#camara');
    },1500);
});

//Funcion para tomar foto 
function tomarFoto() {
    Webcam.snap( function(data_uri) {
        //Vaciamos el div de la foto
        $('#foto').empty();
        //Asignamos la nueva imagen al div
        im = data_uri; 
        $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    } );
}

//Diferentes Filtro A Aplicar A La Imagen
//Tu Puedes Cambiarlos Y Crear Nuevos, solo tienes que jugar con elementos como el tono la saturacion la intencidad etc
//this.render() aplica los cambiaos que se hacen a la imagen.
//$('#foto').html( '<img src="'+im+'" id="foto_filtro"/>'); esta linea nos sirve para regresar la imagen original...y aplicar el filtro sobre esta
//Si no se sobreescribiria el filtro
function filtro1(){
    $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    Caman('#foto_filtro', function () {
        this.greyscale();
        this.contrast(5);
        this.noise(3);
        this.sepia(100);
        this.channels({red:8,blue:2,green:4});
        this.gamma(0.87);
        this.render();
    });
}

function filtro2(){
     $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    Caman('#foto_filtro', function () {
        this.exposure(3.5);
        this.saturation(-5);
        this.vibrance(50);
        this.sepia(60);
        this.colorize("#e87b22",10);
        this.channels({red:8,blue:8});
        this.contrast(5);
        this.gamma(1.2);
        this.render();
    });
}

function filtro3(){
     $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    Caman('#foto_filtro', function () {
        this.brightness(40);
        this.colorize("#ea1c5d",10);
        this.curves("b",[0,10],[128,180],[190,190],[255,255]);
        this.render();
    });
}

function filtro4(){
     $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    Caman('#foto_filtro', function () {
        this.gamma(1.2);
        this.newLayer(function(){this.setBlendingMode("overlay");this.opacity(60);this.copyParent();this.filter.channels({red:5});return this.filter.stackBlur(15)});
        this.newLayer(function(){this.setBlendingMode("addition");this.opacity(40);return this.fillColor("#6899ba")});
        this.render();
    });
}

function filtro5(){
     $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    Caman('#foto_filtro', function () {
        this.vibrance(20);
        this.curves("rgb",[5,0],[130,150],[190,220],[250,255]);
        this.sharpen(15);
        this.render();
    });
}

function filtro6(){
     $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    Caman('#foto_filtro', function () {
        this.greyscale();
        this.render();
    });
}

function filtro7(){
     $('#foto').html( '<img src="'+im+'" id="foto_filtro"/>');
    Caman('#foto_filtro', function () {
        this.greyscale();
        this.render();
    });
}