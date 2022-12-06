$(

  function(){
    

    function pegarData(data){

      year = data.getFullYear();
      month = data.getMonth()+1;
      dt = data.getDate();
      hours = data.getHours();
      minutes=data.getMinutes();


      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
      if (minutes < 10) {
        minutes = '0' + minutes;
      }

        return dt+"/"+month+"/"+year+" "+hours+":"+minutes;

    }

    function setDatePicker(data){

      dataPartida=data.split(" ");
      
      dataD=dataPartida[0].split("/");
      dd=dataD[0];
      mm=dataD[1];
      year=dataD[2];

      return year+"-"+mm+"-"+dd+" "+dataPartida[1];

    }

    function mensagem(mensagem){ 

      $('#botaoEnviaAgenda').css({"border-color": "rgba(255,93,125,1)", "color":"rgba(255,93,125,1)"});
      $('#botaoEnviaAgenda').attr("disabled", true);

      
      $('#mensagem').html(mensagem);

        if($('#mensagem').attr("show")!="True"){
          $("#mensagem").attr("show", "True");
        }

        $('#mensagem').slideDown('fast');
     }

     function mensagemEt(mensagem){ 

      $('#botaoEditarAgenda').css({"border-color": "rgba(255,93,125,1)", "color":"rgba(255,93,125,1)"});
      $('#botaoEditarAgenda').attr("disabled", true);

      
      $('#mensagemEt').html(mensagem);

        if($('#mensagemEt').attr("show")!="True"){
          $("#mensagemEt").attr("show", "True");
        }

        $('#mensagemEt').slideDown('fast');
     }

     function mensagemDl(mensagem){ 
      
      $('#mensagemDl').html(mensagem);

        if($('#mensagemDl').attr("show")!="True"){
          $("#mensagemDl").attr("show", "True");
        }

        $('#mensagemDl').slideDown('fast');
     }
    $('.botaoAlterar').click(function(){

      id_card="#"+$(this).attr("target");

      id=$(id_card).attr("placeholder");
      nome=$(id_card).find("h1").first().text();
      dataInicial=$(id_card).find(".horarios").first().find('p').text();
      dataFinal=$(id_card).find(".dataFinalColor").first().find('p').text();
      descEvento=$(id_card).find(".textDescricao").first().find('p').text();
   
      console.log(setDatePicker(dataInicial));
      $('#idEvento').attr('placeholder', id);
      $("#nameEventEt").val(nome);
      $("#dataIncialEt").val(setDatePicker(dataInicial));
      $("#dataFinalEt").val(setDatePicker(dataFinal));
      $("#descEventEt").val(descEvento);

    });

    $('.botaoCancelar').click(function(){

      id_card="#"+$(this).attr("target");

      id=$(id_card).attr("placeholder");
      $('#idEvento').attr('placeholder', id);

    });
    
    $('#botaoExcluir').click(function(){

      id=$('#idEvento').attr('placeholder');

      if (id==""){

        mensagemDl("Tente novamente mais tarde!");

      }else{
        dados={

          id:id
        };
        $.post("excluirEvento", dados, function(retornoExcluir){


          if(retornoExcluir=="erro"){

            mensagemDl("Tente novamente!");
                
          }else if(retornoExcluir=="ok"){

            location.reload()

          }
        });

      }


    });

    $('#botaoEditarAgenda').click(function(){

      id=$('#idEvento').attr('placeholder');
      nomerEvento=$("#nameEventEt").val();

      if($('#dataIncialEt').val()==""){

        dataInicial=$('#dataIncialEt').val()
      }else{

        dataInicial=new Date($('#dataIncialEt').val());
      }

      if($('#dataFinalEt').val()==""){

        dataFinal=$('#dataFinalEt').val()

      }else{

        dataFinal=new Date($('#dataFinalEt').val());

      }
      descEvento=$("#descEventEt").val();
      dataAtual= new Date();
      dataAtual.setUTCHours(0, 0, 0, 0);

      if(nomerEvento=="" || dataInicial=="" || dataFinal==""){

        if(nomerEvento==""){
   
          $('#nameEventEt').css("border-color", "rgba(255,93,125,1)");
          $('#name-iconEt').css("color", "rgba(255,93,125,1)");

        }

        if(dataInicial==""){

          $('#dataIncialEt').css("border-color", "rgba(255,93,125,1)");
          $('#date-iconEt').css("color", "rgba(255,93,125,1)");
        }

        if(dataFinal==""){
          
          $('#dataFinalEt').css("border-color", "rgba(255,93,125,1)");
          $('#dateF-iconEt').css("color", "rgba(255,93,125,1)");
        }

        mensagemEt("Preencha todos os campos!");

      }else if(dataInicial>dataFinal || dataInicial<dataAtual){

        if(dataInicial<dataAtual){

          $('#dataIncialEt').css("border-color", "rgba(255,93,125,1)");
          $('#date-iconEt').css("color", "rgba(255,93,125,1)");
        }

        if(dataInicial>dataFinal){
          
          $('#dataFinalEt').css("border-color", "rgba(255,93,125,1)");
          $('#dateF-iconEt').css("color", "rgba(255,93,125,1)");
          $('#dataIncialEt').css("border-color", "rgba(255,93,125,1)");
          $('#date-iconEt').css("color", "rgba(255,93,125,1)");

        }

        mensagemEt("Datas invalidas!");

      }else{
             
        var dados= {
          id:id,
          nomerEvento:nomerEvento,
          dataInicial:pegarData(dataInicial),
          dataFinal:pegarData(dataFinal),
          descEvento:descEvento
        };

        $.post("editarEvento", dados, function(retornoEdit){


          if(retornoEdit=="erro"){

            mensagemEt("Tente novamente!");
                
          }else if(retornoEdit =="erro1"){
             
            mensagemEt("Evento já existe!");
            $('#nameEventEt').css("border-color", "rgba(255,93,125,1)");
            $('#name-iconEt').css("color", "rgba(255,93,125,1)");

          }else if(retornoEdit=="ok"){

            location.reload()

          }
        });

      }
    });


    $("#botaoEnviaAgenda").click(function(){

      nomerEvento=$('#nameEvent').val();
      if($('#dataIncial').val()==""){

        dataInicial=$('#dataIncial').val()
      }else{

        dataInicial=new Date($('#dataIncial').val());
      }

      if($('#dataFinal').val()==""){

        dataFinal=$('#dataFinal').val()

      }else{

        dataFinal=new Date($('#dataFinal').val());

      }
      descEvento=$('#descEvent').val();
      dataAtual= new Date();
      dataAtual.setUTCHours(0, 0, 0, 0);

      if(nomerEvento=="" || dataInicial=="" || dataFinal==""){

        if(nomerEvento==""){
   
          $('#nameEvent').css("border-color", "rgba(255,93,125,1)");
          $('#name-icon').css("color", "rgba(255,93,125,1)");

        }

        if(dataInicial==""){

          $('#dataIncial').css("border-color", "rgba(255,93,125,1)");
          $('#date-icon').css("color", "rgba(255,93,125,1)");
        }

        if(dataFinal==""){
          
          $('#dataFinal').css("border-color", "rgba(255,93,125,1)");
          $('#dateF-icon').css("color", "rgba(255,93,125,1)");
        }

        mensagem("Preencha todos os campos!");

      }else if(dataInicial>dataFinal || dataInicial<dataAtual){

        if(dataInicial<dataAtual){

          $('#dataIncial').css("border-color", "rgba(255,93,125,1)");
          $('#date-icon').css("color", "rgba(255,93,125,1)");
        }

        if(dataInicial>dataFinal){
          
          $('#dataFinal').css("border-color", "rgba(255,93,125,1)");
          $('#dateF-icon').css("color", "rgba(255,93,125,1)");
          $('#dataIncial').css("border-color", "rgba(255,93,125,1)");
          $('#date-icon').css("color", "rgba(255,93,125,1)");

        }

        mensagem("Datas invalidas!");

      }else{
        
        
        var dados= {
          nomerEvento:nomerEvento,
          dataInicial:pegarData(dataInicial),
          dataFinal:pegarData(dataFinal),
          descEvento:descEvento

        };
        $.post("cadastroEvento", dados, function(retornoCadastro){


          if(retornoCadastro=="erro"){

            mensagem("Tente novamente!");
                
          }else if(retornoCadastro =="erro1"){
             
            mensagem("Evento já existe!");
            $('#nameEvent').css("border-color", "rgba(255,93,125,1)");
            $('#name-icon').css("color", "rgba(255,93,125,1)");


          }else if(retornoCadastro=="ok"){

            location.reload()

          }
        });

      }
      

    });
    
    $("#nameEvent").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#name-icon').css("color", "rgba(89,147,175,1)");$('#botaoEnviaAgenda').css({"border-color": "rgba(89,147,175,1)", "color": "rgba(89,147,175,1)"});$('#botaoEnviaAgenda').attr("disabled", false);});
    $("#dataIncial").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#date-icon').css("color", "rgba(89,147,175,1)");$('#botaoEnviaAgenda').css({"border-color": "rgba(89,147,175,1)", "color": "rgba(89,147,175,1)"});$('#botaoEnviaAgenda').attr("disabled", false);});
    $("#dataFinal").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#dateF-icon').css("color", "rgba(89,147,175,1)");$('#botaoEnviaAgenda').css({"border-color": "rgba(89,147,175,1)", "color": "rgba(89,147,175,1)"});$('#botaoEnviaAgenda').attr("disabled", false);});
    $('#mensagem').click(function(){$(this).slideUp();$(".form-box").css("height", "-=100");$("#mensagem").attr("show", "False");});

    $("#nameEventEt").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#name-iconEt').css("color", "rgba(89,147,175,1)");$('#botaoEditarAgenda').css({"border-color": "rgba(89,147,175,1)", "color": "rgba(89,147,175,1)"});$('#botaoEditarAgenda').attr("disabled", false);});
    $("#dataIncialEt").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#date-iconEt').css("color", "rgba(89,147,175,1)");$('#botaoEditarAgenda').css({"border-color": "rgba(89,147,175,1)", "color": "rgba(89,147,175,1)"});$('#botaoEditarAgenda').attr("disabled", false);});
    $("#dataFinalEt").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#dateF-iconEt').css("color", "rgba(89,147,175,1)");$('#botaoEditarAgenda').css({"border-color": "rgba(89,147,175,1)", "color": "rgba(89,147,175,1)"});$('#botaoEditarAgenda').attr("disabled", false);});

    $('#mensagemEt').click(function(){$(this).slideUp();$(".form-box").css("height", "-=100");$("#mensagem").attr("show", "False");});
})