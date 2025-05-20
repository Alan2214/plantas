function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

  



window.addEventListener('load', async () => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let remision = document.getElementById('remision').value;
        let nombres = document.getElementById('nombre').value;
        let domicilio = document.getElementById('domicilio').value;
        let telefono = document.getElementById('telefono').value;
        let condiciones = document.getElementById('condiciones').value;

        // producto1
        let cantidad = document.getElementById('cantidad').value;
        let descripcion = document.getElementById('descripcion').value;
        let p_unitario = document.getElementById('p_unitario').value;
        let importe = document.getElementById('importe').value;
       

        // producto2
        let cantidad2 = document.getElementById('cantidad2').value;
        let descripcion2 = document.getElementById('descripcion2').value;
        let p_unitario2 = document.getElementById('p_unitario2').value;
        let importe2 = document.getElementById('importe2').value;
        // producto3
        let cantidad3 = document.getElementById('cantidad3').value;
        let descripcion3 = document.getElementById('descripcion3').value;
        let p_unitario3 = document.getElementById('p_unitario3').value;
        let importe3 = document.getElementById('importe3').value;
        // producto2
        let cantidad4 = document.getElementById('cantidad4').value;
        let descripcion4 = document.getElementById('descripcion4').value;
        let p_unitario4 = document.getElementById('p_unitario4').value;
        let importe4 = document.getElementById('importe4').value;
        // producto5
        let cantidad5 = document.getElementById('cantidad5').value;
        let descripcion5 = document.getElementById('descripcion5').value;
        let p_unitario5 = document.getElementById('p_unitario5').value;
        let importe5 = document.getElementById('importe5').value;
        //Poner Sello
        let discapacidad = document.querySelector('input[name="discapacidad"]:checked').value;
       
        // Total
        
        let subtotal = document.getElementById('subtotal').value;
        let total = document.getElementById('total').value;
       

        generatePDF(remision, nombres, domicilio, telefono, condiciones,cantidad,descripcion,p_unitario,importe, cantidad2,descripcion2,p_unitario2,importe2, cantidad3,descripcion3,p_unitario3,importe3, cantidad4,descripcion4,p_unitario4,importe4, cantidad5,descripcion5,p_unitario5,importe5,discapacidad,subtotal,total );
    })

});

async function generatePDF(remision, nombres, domicilio, telefono, condiciones,cantidad,descripcion,p_unitario,importe,cantidad2,descripcion2,p_unitario2,importe2, cantidad3,descripcion3,p_unitario3,importe3, cantidad4,descripcion4,p_unitario4,importe4, cantidad5,descripcion5,p_unitario5,importe5 ,discapacidad,subtotal,total ) {
    const image = await loadImage("formulario.jpg");
    

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 40,50, 0, 720);
    
    var img = new Image()
    img.src = 'logo.png'
    


    pdf.setTextColor(255,0,0);
    pdf.setFontSize(14);
    pdf.text(remision, 460, 230);

    

    const date = new Date();
    pdf.setTextColor(0,0,0);
    pdf.text(date.getUTCDate().toString(), 453, 285);
    pdf.text((date.getUTCMonth() + 1).toString(), 474, 285);
    pdf.text(date.getUTCFullYear().toString(), 496, 285);

    pdf.text(470, 285, '/');
    pdf.text(491, 285, '/');

    pdf.setFontSize(12);
    pdf.text(nombres, 108,213);
    pdf.text(domicilio, 113, 241);
    pdf.text(telefono, 110, 269);
    pdf.text(condiciones, 130, 298);
   
    //producto1
    pdf.setFontSize(14);
    pdf.text(cantidad, 55,355);
    pdf.text(descripcion, 190,355);
    pdf.text(p_unitario, 450,355);
    pdf.text(importe, 520,355);
    //producto2
    pdf.setFontSize(14);
    pdf.text(cantidad2, 55,375);
    pdf.text(descripcion2, 190,375);
    pdf.text(p_unitario2, 450,375);
    pdf.text(importe2, 520,375);
    //producto3
    pdf.setFontSize(14);
    pdf.text(cantidad3, 55,395);
    pdf.text(descripcion3, 190,395);
    pdf.text(p_unitario3, 450,395);
    pdf.text(importe3, 520,395);
    //producto4
    pdf.setFontSize(14);
    pdf.text(cantidad4, 55,415);
    pdf.text(descripcion4, 190,415);
    pdf.text(p_unitario4, 450,415);
    pdf.text(importe4, 520,415);
    //producto5
    pdf.setFontSize(14);
    pdf.text(cantidad5, 55,435);
    pdf.text(descripcion5, 190,435);
    pdf.text(p_unitario5, 450,435);
    pdf.text(importe5, 520,435);
   
    if (parseInt(discapacidad) === 0) {
      
    
    } else {

      /*  pdf.setDrawColor(255,0,0);
        pdf.rect(218, 460, 110, 22,40,50); 
        pdf.setFontSize(25);
        pdf.setTextColor(255,0,0);
        pdf.setFontType('normal');
        pdf.text('PAGADO',220, 480,);
        */
        pdf.addImage(img, 'png',220,430,110,50,)
    }

    //Total
    pdf.setFontSize(14);
    pdf.setTextColor(0,0,0);
    pdf.text(subtotal, 520,706);
    pdf.text(total, 520,760);

    pdf.save(date.getUTCDate().toString()+'-'+(date.getUTCMonth() + 1).toString()+'-'+date.getUTCFullYear().toString()+'_'+nombres+'_'+'NotaRemision_');

}