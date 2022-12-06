class Agenda:

  def __init__(self, nomeEvento, dataInicial, dataFinal, descEvento, idAgenda, codCliente):
        self.__nomeEvento = nomeEvento
        self.__dataInicial = dataInicial
        self.__dataFinal= dataFinal
        self.__descEvento=descEvento
        self.__idAgenda=idAgenda
        self.__codCliente=codCliente
        
        
  @property
  def nomeEvento(self):
        return self.__nomeEvento
  
  @nomeEvento.setter 
  def nomeEvento(self, nomeEvento):
        self.__nomeEvento = nomeEvento

  @property
  def dataInicial(self):
        return self.__dataInicial
  
  @dataInicial.setter 
  def dataInicial(self, dataInicial):
        self.__dataInicial = dataInicial

  @property
  def dataFinal(self):
        return self.__dataFinal
  
  @dataFinal.setter 
  def dataFinal(self, dataFinal):
        self.__dataFinal = dataFinal

  @property
  def descEvento(self):
        return self.__descEvento
  
  @descEvento.setter 
  def descEvento(self, descEvento):
        self.__descEvento = descEvento

  @property
  def idAgenda(self):
        return self.__idAgenda
  
  @descEvento.setter 
  def idAgenda(self, idAgenda):
        self.__idAgenda = idAgenda

  @property
  def codCliente(self):
        return self.__codCliente
  
  @descEvento.setter 
  def codCliente(self, codCliente):
        self.__codCliente = codCliente
        

  
