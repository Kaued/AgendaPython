import csv
from modal.cliente import cliente
import os
from os.path import exists


def cadastrar():
  
  usuario=cliente.Cliente.usuario
  senha=cliente.Cliente.senha
  cadastro=True
  id_last=0
  if not exists("bd/cliente.csv"):

    try:
      
      with open("bd/cliente.csv", "wt") as fileCliente_out:

        novoCliente=[
          
          {'id':0, 'usuario':usuario, 'senha': senha}

        ]
        leitura = csv.DictWriter(fileCliente_out, ['id', 'usuario', 'senha'])
        leitura.writeheader()
        leitura.writerows(novoCliente)

        fileCliente_out.close()
        return "ok"
    
    except:

      return "erro"

  else:
    try:
      with open("bd/cliente.csv", "rt") as fileCliente_in:

        leitura = csv.DictReader(fileCliente_in)

        for row in leitura:

          clientes = dict(row)

          if usuario==clientes["usuario"]:

            cadastro=False
          
          id_last=int(clientes['id'])+1

        fileCliente_in.close()

    except:
      return "erro" 
    

    if cadastro:

      try:
        with open("bd/cliente.csv", "at") as fileCliente_add:
          novoCliente=[
                
            {'id':id_last, 'usuario':usuario, 'senha': senha}

          ]

          registro=csv.DictWriter(fileCliente_add, ['id', 'usuario', 'senha'])
          registro.writerows(novoCliente)
          fileCliente_add.close()
          cliente.Cliente.logado=False
          
          return "ok"
      except:
        return "erro"

    else:

      return "erro1"
  




      
