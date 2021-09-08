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