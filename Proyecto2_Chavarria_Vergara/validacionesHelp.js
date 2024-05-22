$(document).ready(function(){
  $("#ticketForm").submit(function(event){
    event.preventDefault();

        
        // Realizar las validaciones
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var apodo = $("#apodo").val();
        var ciudad = $("#ciudad").val();
        var consulta = $("#region").val();
        var codigoPostal = $("#codigoPostal").val();

        // Nombre, Apellidos: largo entre 3 y 20 caracteres
        if(nombre.length < 3 || nombre.length > 20 ||
            apellido.length < 3 || apellido.length > 20){
            alert("El Nombre y los Apellidos deben tener entre 3 y 20 caracteres.");
            return;
        }

        // Edad: Validación de edad (Mayor de edad y no pasar los 110 años) 
        if(apodo.length < 3 || apodo.length > 20){
            alert("El apodo debe tener entre 3 y 20 caracteres.");
            return;
        }

        // Género: seleccionado
        if(ciudad === ""){
            alert("Por favor, ingrese una ciudad.");
            return;
        }

        // Celular: largo entre 9 y 12 caracteres
        if(consulta === ""){
            alert("Por favor, ingrese una consulta o problema.");
            return;
        }

        if(codigoPostal.length < 3 || codigoPostal.length > 20){
            alert("Por favor, ingrese un codigo postal valido.");
            return;
        }

        if($("#invalidCheck").is(":checked")) {
          alert("¡Solicitud enviada con exito!");
          return;
        } else {
          $("#invalidCheck").addClass("is-invalid");
        }
      });
      
      $("#invalidCheck").on("change", function() {
        if ($(this).is(":checked")) {
          $(this).removeClass("is-invalid");
          $(this).addClass("is-valid");
        } else {
          $(this).removeClass("is-valid");
          $(this).addClass("is-invalid");
        }
        
    });

    

});
