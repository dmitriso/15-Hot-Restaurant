
const tableNum() =>{


};

$("#waitApi").on("click", function () {
      
    $.get("/api/waitlist/", function (data) {
        console.log(data);
        if (data) {
            $(".table").text(tableNum())
            $(".id").text(data.id);
            $(".name").text(data.name);
            $(".email").text(data.email);
            $(".phone").text(data.phone);
        } else {
            $(".name").text(
                "No Waitlist at this time");
        }
    })
}); 

$("#tableApi").on("click", function () {
$.get("/api/table/", function (data) {
        console.log(data);
        if (data) {
            $('.table').text(tableNum())
            $(".id").text(data.id);
            $(".name").text(data.name);
            $(".email").text(data.email);
            $(".phone").text(data.phone);
        } else {
            $(".name").text(
                "No Reservations at this time.");
        }
    });
}