from flask import Flask, render_template, request
from modal.cliente import cliente, loginCliente, cadastarCliente
from modal.agenda import agenda, cadastraEvento, mostraAgenda, editarAgenda, apagarAgenda

app = Flask(__name__, template_folder="pages")

@app.route("/")
def home():


  if cliente.Cliente.logado == True:
    
      agendas=mostraAgenda.carregarAgenda()
      user= {"cliente":cliente.Cliente, "agenda":agendas}
      return render_template('index.html', user=user)
    
    
  else:

    return render_template('cadastroLogin.html')

@app.route("/login")
def login():

  return render_template('cadastroLogin.html')

@app.route("/cadastrarCliente", methods=['POST'])
def cadastrarCliente():

  if request.method == 'POST':

    usuario=request.form.get('usuario')   
    senha=request.form.get('senha')
    
    cliente.Cliente.usuario=usuario
    cliente.Cliente.senha=senha
    resposta=cadastarCliente.cadastrar()

    return resposta

@app.route("/loginCliente", methods=['POST'])
def loginClienteUser():

  usuario=request.form.get('usuario')
  senha=request.form.get('senha')

  cliente.Cliente.usuario=usuario
  cliente.Cliente.senha=senha
  resposta=loginCliente.loginMd()

  return resposta

@app.route("/logout")
def logout():
  try:

    cliente.Cliente.usuario=""
    cliente.Cliente.senha=""
    cliente.Cliente.logado=False

    
  except:
    print("erro")

  return render_template('cadastroLogin.html')

@app.route("/cadastroEvento", methods=['POST'])
def cadastroEvento():

    nomerEvento=request.form.get('nomerEvento')
    dataInicial=request.form.get('dataInicial')
    dataFinal=request.form.get('dataFinal')
    descEvento=request.form.get('descEvento')

    if not cliente.Cliente.logado==True:

      return 'erro'

    else:
      
      agenda.Agenda.nomeEvento=nomerEvento
      agenda.Agenda.dataInicial=dataInicial
      agenda.Agenda.dataFinal=dataFinal
      agenda.Agenda.descEvento=descEvento
      agenda.Agenda.codCliente=cliente.Cliente.idCliente
      print(dataInicial)
      resposta=cadastraEvento.novoEvento()

      return resposta

@app.route("/carregarAgenda", methods=['POST'])
def mostrarAgenda():

  resposta=mostraAgenda.carregarAgenda()

  return resposta
 
@app.route("/editarEvento", methods=['POST'])
def editarEvento():

    idEvento=request.form.get('id')
    nomerEvento=request.form.get('nomerEvento')
    dataInicial=request.form.get('dataInicial')
    dataFinal=request.form.get('dataFinal')
    descEvento=request.form.get('descEvento')

    if not cliente.Cliente.logado==True:

      return 'erro'

    else:
      
      agenda.Agenda.nomeEvento=nomerEvento
      agenda.Agenda.dataInicial=dataInicial
      agenda.Agenda.dataFinal=dataFinal
      agenda.Agenda.descEvento=descEvento
      agenda.Agenda.codCliente=cliente.Cliente.idCliente
      agenda.Agenda.idAgenda=idEvento

      resposta=editarAgenda.alterarEvento()

      return resposta

@app.route("/excluirEvento", methods=['POST'])
def excluirAgenda():

  id=request.form.get('id')
  
  agenda.Agenda.idAgenda=id

  resposta=apagarAgenda.apagarEvento()

  return resposta

app.run(debug=True)


