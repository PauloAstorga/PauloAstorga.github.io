const nombre = document.getElementById('input-nombre'),
    correo = document.getElementById('input-correo'),
    mensaje = document.getElementById('input-mensaje'),
    send = document.getElementById('send')

send.addEventListener('click', () =>{
    send.style.href="mailto:pauloastorga.docs@gmail.com?Subject=Contacto%20portafolio&body=" + mensaje
})