from flask import Flask, render_template, request
from modal.cliente import cadastarCliente
from modal.cliente import loginCliente
from modal.cliente import cliente
app = Flask(__name__, template_folder="pages")

@app.route("/")
def home():

  return cliente.Cliente.idCliente

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

app.run(debug=True)
