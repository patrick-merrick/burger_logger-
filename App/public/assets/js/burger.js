// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let id = $(this).data("id")
    let newBurger = {
      name: $("#ca").val().trim(),
      devooured: $("[name=devoured]:checked").val().trim()
    };
    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
