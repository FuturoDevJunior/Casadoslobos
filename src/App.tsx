import { useState, useEffect } from 'react';
import { WholeWord as Wolf, Phone, Mail, MapPin, Clock, Instagram, Apple, GraduationCap, Users, Heart, Shield, Brain, Footprints, Star, CheckCircle2, Dog, Bone } from 'lucide-react';

// Renomeando o componente Apple para WhatsApp para manter a consistência
const WhatsApp = Apple;

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.webp")'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <Wolf className="w-24 h-24 mb-6 animate-pulse" />
          <h1 className="text-6xl font-bold mb-4 text-center">Casa dos Lobos</h1>
          <p className="text-2xl mb-4">Escola e Creche para Cães</p>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Transformando vidas através do treinamento canino profissional
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 flex items-center gap-2 justify-center"
            >
              <GraduationCap className="w-5 h-5" />
              Comece o Treinamento
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=5521988053792&text=Ol%C3%A1+Casa+dos+Lobos%21+Vi+o+site+de+voc%C3%AAs+e+quero+saber+mais+sobre+os+servi%C3%A7os+para+meu+c%C3%A3ozinho.+Pode+me+ajudar%3F&type=phone_number&app_absent=0" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-500 transition duration-300 flex items-center gap-2 justify-center"
            >
              <WhatsApp className="w-5 h-5" />
              Fale Conosco
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <a href="#about" className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por Que Nos Escolher?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Com anos de experiência e uma equipe altamente qualificada, oferecemos o melhor em treinamento e cuidados para seu companheiro de quatro patas.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <GraduationCap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Experiência</h3>
              <p className="text-gray-600">Profissionais altamente qualificados em comportamento canino</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalizado</h3>
              <p className="text-gray-600">Treinamento adaptado às necessidades específicas do seu cão</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cuidado</h3>
              <p className="text-gray-600">Ambiente acolhedor e seguro para todos os cães</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Confiança</h3>
              <p className="text-gray-600">Metodologia comprovada e resultados garantidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Diferenciais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma experiência completa de treinamento e cuidados
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">Todas as Raças</h3>
              <p className="text-gray-600">Experiência com cães de todos os portes e temperamentos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <CheckCircle2 className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">Avaliação Gratuita</h3>
              <p className="text-gray-600">Primeira consulta para conhecer seu cão sem compromisso</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Dog className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">Ambiente Seguro</h3>
              <p className="text-gray-600">Espaço adequado e monitorado 24 horas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <Bone className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">Socialização</h3>
              <p className="text-gray-600">Interação supervisionada entre os cães</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções completas para o desenvolvimento do seu cão
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Treinamento Comportamental</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Socialização controlada e progressiva</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Obediência básica e avançada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Correção de comportamentos indesejados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Treinamento personalizado para cada cão</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Creche Escola</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Socialização supervisionada em grupo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Atividades educativas e recreativas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Exercícios físicos programados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Monitoramento profissional constante</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoria para Tutores</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Orientação personalizada e contínua</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Workshops educativos em grupo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Suporte via WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                  <span>Material educativo exclusivo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estamos prontos para ajudar você e seu cão a alcançarem uma convivência mais harmoniosa
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8 hover:transform hover:translate-x-2 transition-transform">
                <WhatsApp className="w-6 h-6 mr-4 text-green-500" />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5521988053792"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    (21) 98805-3792
                  </a>
                </div>
              </div>
              <div className="flex items-center mb-8 hover:transform hover:translate-x-2 transition-transform">
                <Mail className="w-6 h-6 mr-4 text-blue-500" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p>contato@casadoslobos.com.br</p>
                </div>
              </div>
              <div className="flex items-center mb-8 hover:transform hover:translate-x-2 transition-transform">
                <MapPin className="w-6 h-6 mr-4 text-red-500" />
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p>Pechincha, Jacarepaguá - Rio de Janeiro, RJ</p>
                </div>
              </div>
              <div className="flex items-center mb-8 hover:transform hover:translate-x-2 transition-transform">
                <Clock className="w-6 h-6 mr-4 text-purple-500" />
                <div>
                  <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                  <p>Segunda a Sábado: 8h às 19h</p>
                  <p>Domingo: 9h às 17h</p>
                </div>
              </div>
              <div className="flex gap-6 mt-8">
                <a 
                  href="https://www.instagram.com/escolacasadoslobos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500 transition-colors transform hover:scale-110"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a 
                  href="https://wa.me/5521988053792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors transform hover:scale-110"
                >
                  <WhatsApp className="w-8 h-8" />
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Sobre seu cão</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
                    placeholder="Conte-nos sobre seu cão (idade, raça, comportamentos) e seus objetivos com o treinamento"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 w-full transform hover:scale-105"
                >
                  Solicitar Informações
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <Wolf className="w-12 h-12 mx-auto mb-4" />
          <p>© 2024 Casa dos Lobos Escola e Creche para Cães. Todos os direitos reservados.</p>
          <p>Desenvolvido por <a href="https://linkedin.com/in/DevFerreiraG" target="_blank">DevFerreiraG</a> <span className="footer-dog">🐶</span></p>
        </div>
      </footer>
    </div>
  );
}

export default App;