import csv
from modal.agenda import agenda
import os
from os.path import exists

def apagarEvento():

  id=agenda.Agenda.idAgenda
  resultado=[]
  with open("bd/agenda.csv", "rt", encoding='utf-8') as fileAgenda_in:

    leitura = csv.DictReader(fileAgenda_in)

    for row in leitura:

      agendas = dict(row)

      if id!=agendas['id']:

        evento={"nome":agendas['nome'], "dataInicial": agendas['dataInicial'], "datafinal": agendas['datafinal'], "descEvento": agendas['descEvento'], "id":agendas['id'], "codCliente":agendas['codCliente']}

        resultado.append(evento)
      

    fileAgenda_in.close()

  with open("bd/agenda.csv", "wt", encoding='utf-8') as fileCliente_out:

        leitura = csv.DictWriter(fileCliente_out, ['id', 'nome', 'dataInicial', 'datafinal', 'descEvento', 'codCliente'])
        leitura.writeheader()
        leitura.writerows(resultado)

        fileCliente_out.close()
        return "ok"