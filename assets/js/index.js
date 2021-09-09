// Actualizamos el usuario
$("#update_user").submit(function(event){
    event.preventDefault();

    // Declaramos dos arrays, uno no-indexado y otro que contenga la data
    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT", 
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("El usuario fue actualizado con exito");
    })
})

// Agregar usuarios
$("#add_user").submit(function(event){
    alert("El usuario fue agregado correctamente");
})

if(window.location.pathname == '/') {
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("¿Estas seguro de borrar este usuario?")){
            $.ajax(request).done(function(response){
                alert("El usuario ha sido eliminado con exito");
                location.reload();
            })
        }
    })
}