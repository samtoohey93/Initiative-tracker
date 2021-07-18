$(".add-option").click(function(){
    
    $(".playerPod:first").clone().appendTo(".input-container");
      $(".input-container input:last").val("");
  
  });

  $( document ).ready(function() {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    });