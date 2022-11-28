from flask import Flask, render_template, request
from modal.cliente import cadastarCliente
from modal.cliente import cliente

app = Flask(__name__, template_folder="pages")

@app.route("/")
def home():

  return "Hi"

@app.route("/login")
def login():

  return render_template('cadastroLogin.html')

@app.route("/cadastrarCliente", methods=['POST'])
def cadastrarCliente():

  if request.method == 'POST':

    usuario=request.form.get('usuario')
    senha=request.form.get('senha')
    
    clienteRegister=cliente.Cliente(usuario, senha, 0)
    resposta=cadastarCliente.cadastrar(clienteRegister)

    return resposta

app.run(debug=True)
