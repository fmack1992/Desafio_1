let mediaHora = 0, hora = 0, medioDia = 0, dia = 0, semana = 0, mes = 0;
let precioMediaHora = 50, precioHora = 100, precioMedioDia = 400, precioDia = 800, precioSemana = 4000, precioMes = 16000;    

function comprar (){
    let codigo
do{
    //Pedir que ingrese el codigo:
     codigo = parseInt(prompt(`**** Sistema de Estacionamiento Medido - Puerto Madryn **** \n Ingrese el número de acuerdo a la opción que desea adquirir: \n1: Media hora $50. \n2: Una Hora $100. \n3: Medio día (4 horas) $400. \n4: Día (8 horas) $800. \n5: Semana (40 horas) $4.000. \n6: Mes (160 horas) $16.000. \n *Para finalizar, ingrese el número 7`));

     //Casos:
    switch(codigo){

        case 1: mediaHora +=1; alert("Usted ha adquirido media hora de estacionamiento medido.");
        break;

        case 2: hora +=1; alert("Usted ha adquirido una hora de estacionamiento medido.");
        break;

        case 3: medioDia +=1; alert("Usted ha adquirido media día de estacionamiento medido.");
        break;

        case 4: dia +=1; alert("Usted ha adquirido un día de estacionamiento medido.");
        break;

        case 5: semana +=1; alert("Usted ha adquirido una semana de estacionamiento medido.");
        break;

        case 6: mes +=1; alert("Usted ha adquirido un mes de estacionamiento medido.")
        break;

        case 7: alert("Usted ha finalizado su pedido de horas.")
        break;

        default: alert("Ha seleccionado una opción no válida.");
    } //fin switch
    } while (codigo != 7); 
};
comprar();
alert(`El detalle de su pedido es: \n Media Hora: ${mediaHora}. \n Una Hora: ${hora}. \n Medio día: ${medioDia}. \n Un día: ${dia}. \n Una semana: ${semana}. \n Un mes: ${mes}`);

const TOTALPEDIDO = (mediaHora, medioDia, dia, semana, mes) => mediaHora*precioMediaHora + hora*precioHora + medioDia*precioMedioDia + dia*precioMedioDia + semana*precioSemana + mes*precioMes;

let totalPagar = TOTALPEDIDO(mediaHora, medioDia, dia, semana, mes);
alert(`El total a pagar es de ${totalPagar}`);





