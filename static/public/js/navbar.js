$(

  function(){
    
    var pathname = window.location.pathname;

    if(pathname=="/" || pathname=="/home" || pathname=="/agenda"){

      $("#itemAgenda").addClass("active");

    }else if(pathname=="/pesquisar" || pathname=="/pesquisarAgenda" || pathname=="/search"){

      $("#itemPesquisar").addClass("active");
    }

    function identifActive(){
      idActive="#"+$('.active').attr('id');

      colorEdit="";

      if(idActive=="#itemAgenda"){

        colorEdit="rgba(89,147,175,1)";

      }else if(idActive=="#itemPesquisar"){

        colorEdit="rgba(255,93,125,1)";

      }

      $(idActive).css({"background-color": colorEdit});
      $(idActive).find("b").css({"color": "white"});
      $(idActive).find("svg").css({"color": "white"});
    }

    identifActive();

    $('.itemAgenda').hover(function(){
      
      $(this).find("a").find("b").animate({width:'toggle', opacity: "1"},100);
      
          
    },

      function () { 

      $(this).find("b").animate({width:'toggle'}, 100);

    });

    $('.itemPesquisar').hover(function(){
      
      $(this).find("a").find("b").animate({width:'toggle', opacity: "1"},100);
      
          
    },

      function () { 

      $(this).find("b").animate({width:'toggle'}, 100);

    });


})