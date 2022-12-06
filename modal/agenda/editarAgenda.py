import csv
from modal.agenda import agenda

def alterarEvento():

  nomeEvento=agenda.Agenda.nomeEvento
  dataInicial=agenda.Agenda.dataInicial
  dataFinal=agenda.Agenda.dataFinal
  codCliente=agenda.Agenda.codCliente
  descEvento=agenda.Agenda.descEvento
  id=agenda.Agenda.idAgenda

  resultado=[]
  with open("bd/agenda.csv", "rt", encoding='utf-8') as fileAgenda_in:

    leitura = csv.DictReader(fileAgenda_in)

    for row in leitura:

      agendas = dict(row)

      if nomeEvento==agendas['nome'] and id==agendas['id']:

        evento={"nome":nomeEvento, "dataInicial": dataInicial, "datafinal": dataFinal, "descEvento": descEvento, "id":id,"codCliente":agendas['codCliente']}

      elif nomeEvento==agendas['nome']:
        return "erro1"

      if id==agendas['id']:
          
        if nomeEvento!=agendas['nome']:

          evento={"nome":nomeEvento, "dataInicial": dataInicial, "datafinal": dataFinal, "descEvento": descEvento, "id":id,"codCliente":agendas['codCliente']}
          

      else:

        evento={"nome":agendas['nome'], "dataInicial": agendas['dataInicial'], "datafinal": agendas['datafinal'], "descEvento": agendas['descEvento'], "id":agendas['id'], "codCliente":agendas['codCliente']}

      resultado.append(evento)

    fileAgenda_in.close()

  with open("bd/agenda.csv", "wt", encoding='utf-8') as fileCliente_out:

        leitura = csv.DictWriter(fileCliente_out, ['id', 'nome', 'dataInicial', 'datafinal', 'descEvento', 'codCliente'])
        leitura.writeheader()
        leitura.writerows(resultado)

        fileCliente_out.close()
        return "ok"

  
  