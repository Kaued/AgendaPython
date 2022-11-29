import csv
from modal.cliente import cliente
import os
from os.path import exists



def loginMd():

  usuario=cliente.Cliente.usuario
  senha=cliente.Cliente.senha
  login=True

  if exists("bd/cliente.csv"):

    
      with open("bd/cliente.csv", "rt") as fileCliente_in:

        leitura = csv.DictReader(fileCliente_in)

        for row in leitura:

          clientes = dict(row)

          if usuario==clientes["usuario"]:


            if senha==clientes["senha"]:

              cliente.Cliente.usuario=usuario
              cliente.Cliente.senha=senha
              cliente.Cliente.idCliente=clientes["id"]
              cliente.Cliente.logado=True
              
              return("ok")

            else:

              return "erro2"
              break

          else:

            login=False

      
      if not login:

        return usuario
          

        fileCliente_in.close()
    
   
     
  else:

    return "erro1"

