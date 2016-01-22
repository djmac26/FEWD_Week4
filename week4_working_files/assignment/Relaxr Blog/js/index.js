$(document).ready(function(){
    $("#nav-button").click(function(event){
        event.preventDefault();
    });

    $("#icons li").click(function(event){
        event.preventDefault();
    });

    $("#side-btn li a").click(function(event){
        event.preventDefault();
    });

    $(".read-btn-1").click(function(event){
      $(".description-hide-1").slideDown();
      $(".read-btn-1").hide();
      $(".readless-btn-1").fadeIn(1200);
      $(".readless-btn-1").show();
        event.preventDefault();
    });

    $(".readless-btn-1").click(function(event){
      $(".description-hide-1").slideUp();
      $(".readless-btn-1").hide();
      $(".read-btn-1").fadeIn(1200);
      $(".read-btn-1").show();
        event.preventDefault();
    });

    $(".read-btn-2").click(function(event){
      $(".description-hide-2").slideDown();
      $(".read-btn-2").hide();
      $(".readless-btn-2").fadeIn(1200);
      $(".readless-btn-2").show();
        event.preventDefault();
    });

    $(".readless-btn-2").click(function(event){
      $(".description-hide-2").slideUp();
      $(".readless-btn-2").hide();
      $(".read-btn-2").fadeIn(1200);
      $(".read-btn-2").show();
        event.preventDefault();
    });

    $(".learn-btn").click(function(event){
      $(".about-side-hide").slideDown();
      $(".learn-btn").hide();
        event.preventDefault();
    });
});
