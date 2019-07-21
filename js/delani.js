$(document).ready(function(){
  $("#design-icon").click(function(){
    $(".design-text").show();
    $("#design-icon").hide();
    
  });
  $(".design-text").click(function(){
    $("#design-icon").show();
    $(".design-text").hide();
  });

  
  $("#dev-icon").click(function(){
    $(".dev-text").show();
    $("#dev-icon").hide();
    
  });
  $(".dev-text").click(function(){
    $("#dev-icon").show();
    $(".dev-text").hide();
  });


  $("#prod-icon").click(function(){
    $(".prod-text").show();
    $("#prod-icon").hide();
    
  });
  $(".prod-text").click(function(){
    $("#prod-icon").show();
    $(".prod-text").hide();
  });

  // hover effect
  // $("#work4,.displayName").hover(function(){
  //   $("#work4").addClass("reduceOpacity");
  //   $(".displayName").show();},function(){
  //     $(this).removeClass("reduceOpacity");
  //     $(".displayName").hide();
  // });
  $(".cont img ").each(function(){
    $(this).hover(function(){
      $(this).addClass("reduceOpacity");
      $(this).siblings(":last").show();
      },function(){
        $(this).removeClass("reduceOpacity");
        $(this).siblings(":last").hide();
      });

 
  
  });


  $(".cont .projectNames").each(function(){
    // $(this).val($(this).data("name"));
    $(this).hover(function(){
      $(this).show();
      $(this).siblings(":first").addClass("reduceOpacity");
    });
    });

    $(".serv").hover(function(){
      $(this).addClass("changeColor");
      $("#s-image").addClass("reduceOpacity");
    },function(){
      $(this).removeClass("changeColor");
      $("#s-image").removeClass("reduceOpacity");
    });
   
//submiting the form//front-end
$("#contact").keydown(function(){
  var userName=$("#name").val();
  var emailAdress=$("#email").val();
  var submitKey=event.which;
  var userMessage=$("#comments").val();
  if(submitKey===13){
    if(userName===""){
      alert("You must enter a name!");
    }else if(emailAdress===""){
      alert("Enter your email address.");
    }else if(userMessage===""){
      alert("message is missing!");
    }else{
      $(this).submit();
      alert(userName + " "+"we have received your message. Thank you for reaching out to us.");
    }
  }


});
  
});