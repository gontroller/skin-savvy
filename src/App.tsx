import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                SKIN SAVVY
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition-colors">Início</a>
              <a href="#produtos" className="text-gray-700 hover:text-pink-500 transition-colors">Produtos</a>
              <a href="#sobre" className="text-gray-700 hover:text-pink-500 transition-colors">Sobre</a>
              <a href="#contato" className="text-gray-700 hover:text-pink-500 transition-colors">Contato</a>
            </nav>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
              Comprar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Chega de rotina
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {" "}chata!
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A Skin Savvy chegou pra mostrar que cuidar da pele pode ser divertido, 
                descomplicado e super eficaz. Produtos incríveis com ingredientes de alta qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Descobrir Produtos
                </button>
                <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Limpeza Suave</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Hidratação Intensa</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Proteção Solar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produtos que Transformam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções eficazes e acessíveis para todos os tipos de pele, 
              sem enrolação. Cada produto é criado com carinho e atenção.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Produto 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mx-auto"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gel Limpiador Suave</h3>
              <p className="text-gray-600 mb-4">
                Remove impurezas sem ressecar. Ideal para todos os tipos de pele.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-500">R$ 89,90</span>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-colors">
                  Comprar
                </button>
              </div>
            </div>

            {/* Produto 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sérum Hidratante</h3>
              <p className="text-gray-600 mb-4">
                Hidratação profunda com ácido hialurônico. Pele radiante em 7 dias.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-500">R$ 129,90</span>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors">
                  Comprar
                </button>
              </div>
            </div>

            {/* Produto 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-full mx-auto"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Protetor Solar</h3>
              <p className="text-gray-600 mb-4">
                Proteção UVA/UVB com textura leve. Não deixa a pele oleosa.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-500">R$ 79,90</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Por que escolher a 
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Skin Savvy?</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ingredientes Naturais</h3>
                    <p className="text-gray-600">Produtos cruelty-free com ingredientes de alta qualidade</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Para Todos os Tipos</h3>
                    <p className="text-gray-600">Soluções personalizadas para diferentes tipos de pele</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ritmo da Vida Real</h3>
                    <p className="text-gray-600">Produtos que se encaixam na sua rotina corrida</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-pink-500">25-45</div>
                    <div className="text-gray-700">Mulheres que confiam na gente</div>
                    <div className="text-sm text-gray-500">Público-alvo principal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronta para transformar sua pele?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Junte-se a milhares de mulheres que já descobriram o poder da Skin Savvy
          </p>
          <button className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Começar Agora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                SKIN SAVVY
              </h3>
              <p className="text-gray-400">
                Cuidando da sua pele com carinho e eficiência.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Limpeza</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Hidratação</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Proteção</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Tratamento</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Trocas</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Garantia</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@skinsavvy.com</li>
                <li>(11) 99999-9999</li>
                <li>Seg-Sex: 9h às 18h</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Skin Savvy. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;