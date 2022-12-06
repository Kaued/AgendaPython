import csv
from modal.agenda import agenda
from modal.cliente import cliente
import os
from os.path import exists

def carregarAgenda():

  resultado=[]
  if exists("bd/agenda.csv") and cliente.Cliente.logado==True:

    with open("bd/agenda.csv", "rt", encoding='utf-8') as fileAgenda_in:

      leitura = csv.DictReader(fileAgenda_in)

      for row in leitura:

        agendas = dict(row)

        if cliente.Cliente.idCliente==agendas["codCliente"]:

          evento={"nome":agendas['nome'], "dataInicial": agendas['dataInicial'], "dataFinal": agendas['datafinal'], "descEvento": agendas['descEvento'], "id":agendas['id']}

          resultado.append(evento)
    

      fileAgenda_in.close()

    resultado.sort(key=lambda r: r['dataInicial'])
  
  return resultado