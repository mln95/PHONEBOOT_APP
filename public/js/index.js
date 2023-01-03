if(window.location.pathname == "/"){
    const ondelete = document.querySelectorAll(".delete");
    ondelete.forEach(function(el) {
       
        el.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
  
        var request = {
            "url" : `http://localhost:3000/api/v1/contact/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            fetch(request.url, {
                method: request.method,
                body: JSON.stringify(request.data),
                headers: {
                "Content-Type": "application/json"
                }
                }).then(response => {
                alert("Data Updated Successfully!");
                window.location.replace('/')
                });
        }
    });
    })
} else {
    document.getElementById('update').addEventListener('submit', function(event) {
    event.preventDefault()
    let form = new FormData(this);
    let unindexed_array = Array.from(form.entries())
    var data = {
        id: unindexed_array[0][1],
        firstname: unindexed_array[1][1],
        lastname: unindexed_array[2][1],
        email: unindexed_array[3][1],
        phone: unindexed_array[4][1]
    }

    var request = {
        "url" : `http://localhost:3000/api/v1/contact/${data.id}`,
        "method" : "PATCH",
        "data" : data
    }
      
    fetch(request.url, {
        method: request.method,
        body: JSON.stringify(request.data),
        headers: {
        "Content-Type": "application/json"
        }
        }).then(response => {
        alert("Data Updated Successfully!");
        window.location.replace('/')
        });
})
    
}
