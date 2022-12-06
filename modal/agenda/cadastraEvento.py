import csv
from modal.agenda import agenda
import os
from os.path import exists

def novoEvento():

  nomeEvento=agenda.Agenda.nomeEvento
  dataInicial=agenda.Agenda.dataInicial
  dataFinal=agenda.Agenda.dataFinal
  codCliente=agenda.Agenda.codCliente
  descEvento=agenda.Agenda.descEvento
  id_last=0
  cadastro=True
  if not exists("bd/agenda.csv"):

    try:

      with open("bd/agenda.csv", "wt", encoding='utf-8') as fileCliente_out:

        evento=[
          
          {'id':0, 'nome':nomeEvento, 'dataInicial': dataInicial, 'datafinal': dataFinal, 'descEvento': descEvento, 'codCliente': codCliente}

        ]
        leitura = csv.DictWriter(fileCliente_out, ['id', 'nome', 'dataInicial', 'datafinal', 'descEvento', 'codCliente'])
        leitura.writeheader()
        leitura.writerows(evento)

        fileCliente_out.close()
        return "ok"
    except:

      return "erro"
    

  else:
    
    try:

      with open("bd/agenda.csv", "rt", encoding='utf-8') as fileAgenda_in:

        leitura = csv.DictReader(fileAgenda_in)

        for row in leitura:

          agendas = dict(row)

          if nomeEvento==agendas["nome"]:

            cadastro=False
          
          id_last=int(agendas['id'])+1

        fileAgenda_in.close()

    except:

      return "erro"
  

    if cadastro:

      try:

        with open("bd/agenda.csv", "at", encoding='utf-8') as fileAgenda_add:
            
          evento=[
            
            {'id':id_last, 'nome':nomeEvento, 'dataInicial': dataInicial, 'datafinal': dataFinal, 'descEvento': descEvento, 'codCliente': codCliente}

          ]

          registro=csv.DictWriter(fileAgenda_add, ['id', 'nome', 'dataInicial', 'datafinal', 'descEvento', 'codCliente'])
          registro.writerows(evento)
          fileAgenda_add.close()
            
          return "ok"

      except:
          
        return "erro"

    else:

      return "erro1"