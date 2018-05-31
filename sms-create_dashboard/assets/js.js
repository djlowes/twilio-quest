$(document).ready(function() {

  $.ajax({url: "/api/dashboard", method: "GET"}).done(function(res) {
    console.log(res);
    for (var i = 0; i < res.length; i++) {
      // var $row = $("<tr>");
      var $td1 = $("<td>").append(res[i].description);
      var $td2 = $("<td>").append(res[i].startDate + " " + res[i].endDate);
      var $td3 = $("<td>").append(res[i].count);
      var $td4 = $("<td>").append(res[i].price);

      // $row.append($td1.html());
      // $row.append($td2.html());
      // $row.append($td3.html());
      // $row.append($td4.html());

      $("#category").append($td1.html());
      $("#date").append($td2.html());

      // var category = document.getElementById("category");
      // var date = document.getElementById("date");
      // var count = document.getElementById("count");
      // var price = document.getElementById("price");
      //
      // var categoryChild = $("<div>").append(res[i].category);
      //
      // category.append(categoryChild.html());

      /*

      --------------------- INCOMPLETE ---------------------------
      Everything working, just need to design the table and append each element
      in list format.

      */

    }
  });

});
