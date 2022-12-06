class Cliente:

  def __init__(self, usuario, senha, logado, idCliente):
        self.__usuario = usuario
        self.__senha = senha
        self.__idCliente = idCliente
        self.__logado=logado
        
  

  @property
  def usuario(self):
        return self.__usuario
  
  @usuario.setter 
  def usuario(self, usuario):
        self.__usuario = usuario

  @property
  def senha(self):
        return self.__senha
  
  @senha.setter 
  def senha(self, senha):
        self.__senha = senha

  @property
  def logado(self):
        return self.__logado
  
  @logado.setter 
  def logado(self, logado):
        self.__logado = logado

  @property
  def idCliente(self):
        return self.__idCliente
  
  @idCliente.setter 
  def idCliente(self, idCliente):
        self.__idCliente = idCliente
  
  def __init__(self):
        Cliente.logado(False)
  
