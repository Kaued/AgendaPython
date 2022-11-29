$(

  function(){

    function login(){

      
      if($('#login').attr("show")=="False"){
  
        $('#cadastrar').css("display","none");
        $('#login').css("display", "block");
        $('#btn').css("left", "-=110px");
        $('#login').attr("show","True");                       
      }
        
     
    }
    function mensagem(mensagem){ 

      if($('#login').attr("show")=="True"){

        $('#btnEntrar').css("background", "rgba(255,93,125,1)");

      }else{

        $('#btnCadastrar').css("background", "rgba(255,93,125,1)");

      }
      
      $('#mensagem').html(mensagem);

        if($('#mensagem').attr("show")!="True"){
          $(".form-box").css("height", "+=100");
          $("#mensagem").attr("show", "True");
        }

        $('#mensagem').slideDown('fast');
     }

     function retorno(mensagem){ 

      $('#retorno').html(mensagem);

        if($('#retorno').attr("show")!="True"){
          $(".form-box").css("height", "+=100");
          $("#retorno").attr("show", "True");
        }

        $('#retorno').slideDown('fast');
     }

    $("#registerBtn").click(
      
      function(){
      
        if($('#login').attr("show")=="True"){

          $('#login').css("display","none");
          $('#cadastrar').css("display", "block");
          $('#btn').css("left", "+=110px");
          $('#login').attr("show","False");
        }
      
    });

    $("#loginBtn").click(

      function(){

        login();
    });

    $("#btnCadastrar").click(

      function(){

        var usuario=$('#user_register').val();
        var senha=$('#password_register').val();
        var confSenha=$('#password_confirm').val();

        if ((usuario=="") || (senha=="") || (confSenha=="")){

          if(usuario==""){

            $('#user_register').css("border-color", "rgba(255,93,125,1)");
            $('#userRegister').css("color", "rgba(255,93,125,1)");
            
          }
          if(senha==""){

            $('#password_register').css("border-color", "rgba(255,93,125,1)");
            $('#passwordRegister_ico').css("color", "rgba(255,93,125,1)");

          }
          if(confSenha==""){

            $('#password_confirm').css("border-color", "rgba(255,93,125,1)");
            $('#passwordConfirm_ico').css("color", "rgba(255,93,125,1)");
          }

          mensagem("Preencha todos os campos!");
  
          
        }else if(confSenha!=senha){

          $('#password_register').css("border-color", "rgba(255,93,125,1)");
          $('#passwordRegister_ico').css("color", "rgba(255,93,125,1)");

          
          $('#password_confirm').css("border-color", "rgba(255,93,125,1)");
          $('#passwordConfirm_ico').css("color", "rgba(255,93,125,1)")

          mensagem("As senhas devem ser iguais");
          
        }else{

            var dados= {
              usuario:usuario,
              senha: senha         
            };
            $.post("cadastrarCliente", dados, function(retornoCadastro){


              if(retornoCadastro=="erro"){

                mensagem("Tente novamente!")
                    
              }else if(retornoCadastro =="erro1"){
                 
                mensagem("Usúario já exitste!")

              }else if(retornoCadastro=="ok"){

                login();
                retorno("Cadastrado com sucesso!");

              }
            });
        }
      });

      $("#btnEntrar").click(

        function(){
  
          var usuario=$('#user').val();
          var senha=$('#password').val();
  
          if ((usuario=="") || (senha=="")){
  
            if(usuario==""){
  
              $('#user').css("border-color", "rgba(255,93,125,1)");
              $('#user-icon').css("color", "rgba(255,93,125,1)");
              
            }
            if(senha==""){
  
              $('#password').css("border-color", "rgba(255,93,125,1)");
              $('#passowrd-icon').css("color", "rgba(255,93,125,1)");
  
            }
  
            mensagem("Preencha todos os campos!");

          }else{
  
              var dados= {
                usuario:usuario,
                senha: senha         
              };
              $.post("loginCliente", dados, function(retornoLogin){
  
  
                if(retornoLogin=="erro"){
  
                  mensagem("Tente novamente!");
                      
                }else if(retornoLogin =="erro1"){
                   
                  mensagem("Usúario incorreto!");
                  $('#user').css("border-color", "rgba(255,93,125,1)");
                  $('#user-icon').css("color", "rgba(255,93,125,1)");
  
                }else if(retornoLogin=="erro2"){
  
                  
                  mensagem("Senha invaslida!");
                  $('#password').css("border-color", "rgba(255,93,125,1)");
                  $('#passowrd-icon').css("color", "rgba(255,93,125,1)");
  
  
                }else if(retornoLogin=="ok"){

                  location.href="/";

                }
              });
          }
        });
      $("#user_register").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#userRegister').css("color", "rgba(89,147,175,1)");$('#btnCadastrar').css("background", "rgba(89,147,175,1)");});
      $("#user").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#user-icon').css("color", "rgba(89,147,175,1)");$('#btnEntrar').css("background", "rgba(89,147,175,1)");});
      $("#password").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#passowrd-icon').css("color", "rgba(89,147,175,1)");$('#btnEntrar').css("background", "rgba(89,147,175,1)");});
      $("#password_register").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#passwordRegister_ico').css("color", "rgba(89,147,175,1)");$('#btnCadastrar').css("background", "rgba(89,147,175,1)");});
      $("#password_confirm").click(function(){$(this).css("border-color", "rgba(89,147,175,1)");$('#passwordConfirm_ico').css("color", "rgba(89,147,175,1)");$('#btnCadastrar').css("background", "rgba(89,147,175,1)");});
      $('#mensagem').click(function(){$(this).slideUp();$(".form-box").css("height", "-=100");$("#mensagem").attr("show", "False");});
      $('#retorno').click(function(){$(this).slideUp();$(".form-box").css("height", "-=100");$("#mensagem").attr("show", "False");});
})
  