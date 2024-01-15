const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        
        let Motivo1 = document.getElementById('Motivo1').value;
       
        let Motivo2 = document.getElementById('Motivo2').value;
       
        let Motivo3 = document.getElementById('Motivo3').value;
        let Motivo4 = document.getElementById('Motivo4').value;
        let Motivo5 = document.getElementById('Motivo5').value;

    
        //5491122874280
        let numero= 5491161367087;
        
var win= window.open(`https://wa.me/${numero}?text=
Hola%20soy%20*${nombre}*%0A%0A

*Datos*%0A
telefono del evangelista%20${Motivo1}%0A%0A
fecha%20${Motivo2}%0A%0A
direccion%20${Motivo3}%0A
telefono%20${Motivo4}%0A
Oracion por${Motivo5}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)