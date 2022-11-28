class Cliente:

  def __init__(self, usuario, senha, idCliente):
        self.__usuario = usuario
        self.__senha = senha
        self.__idCliente = idCliente

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