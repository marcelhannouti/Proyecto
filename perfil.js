
function mostrar(){
    $("#Nombre_usuario").prop("disabled", false); 
    $("#Contraseña").prop("disabled", false); 

}

function guardar(){
    $("#Nombre_usuario").prop("disabled", true);
    $("#Contraseña").prop("disabled", true); 


}
function cerrar(){
    document.location.href = "inicio_de_session.html"
}