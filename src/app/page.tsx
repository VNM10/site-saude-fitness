'use client';

import { useState } from 'react';
import Navbar from '@/components/custom/navbar';
import Footer from '@/components/custom/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingDown, 
  TrendingUp, 
  Zap, 
  Dumbbell, 
  Home, 
  Camera,
  CheckCircle2,
  Crown,
  Users,
  Target,
  Calendar,
  Award
} from 'lucide-react';

export default function Home() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    {
      id: 'weight-loss',
      title: 'Emagrecimento',
      description: 'Perca peso de forma saudável e sustentável',
      icon: TrendingDown,
      color: 'from-orange-400 to-pink-600',
      benefits: ['Queima de gordura', 'Definição muscular', 'Mais energia']
    },
    {
      id: 'weight-gain',
      title: 'Ganho de Peso',
      description: 'Ganhe massa muscular e força',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      benefits: ['Hipertrofia', 'Força muscular', 'Melhor postura']
    },
    {
      id: 'endurance',
      title: 'Resistência Física',
      description: 'Melhore seu desempenho no futebol',
      icon: Zap,
      color: 'from-emerald-400 to-teal-600',
      benefits: ['Mais resistência', 'Velocidade', 'Performance esportiva']
    }
  ];

  const features = [
    {
      icon: Target,
      title: 'Planos Personalizados',
      description: 'Programas adaptados ao seu objetivo e nível'
    },
    {
      icon: Camera,
      title: 'Cálculo de Calorias',
      description: 'Analise suas refeições com IA (Premium)'
    },
    {
      icon: Dumbbell,
      title: 'Treinos Flexíveis',
      description: 'Academia ou casa, você escolhe'
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Compartilhe resultados e motive-se'
    },
    {
      icon: Calendar,
      title: 'Acompanhamento',
      description: 'Registre seu progresso diariamente'
    },
    {
      icon: Award,
      title: 'Resultados Reais',
      description: 'Transformações comprovadas'
    }
  ];

  const plans = [
    {
      name: 'Free',
      price: 'Grátis',
      features: [
        'Plano de treino básico',
        'Acompanhamento de peso',
        'Acesso à comunidade',
        'Dicas de nutrição'
      ],
      cta: 'Começar Grátis',
      popular: false
    },
    {
      name: 'Premium',
      price: 'R$ 29,90/mês',
      features: [
        'Todos os recursos Free',
        'Planos personalizados',
        'Cálculo de calorias por IA',
        'Treinos avançados',
        'Suporte prioritário',
        'Análise de progresso detalhada'
      ],
      cta: 'Assinar Premium',
      popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-2 text-sm">
            🔥 Mais de 10.000 transformações realizadas
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Transforme Seu Corpo,
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Alcance Seus Objetivos
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Programas personalizados de fitness com foco em resultados reais. 
            Emagrecimento, ganho de massa ou resistência para o futebol - você escolhe!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 text-lg px-8 py-6"
            >
              Começar Agora - É Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-lg px-8 py-6"
            >
              Ver Planos Premium
            </Button>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="objetivos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha Seu Objetivo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Programas especializados para cada meta. Qual é a sua?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <Card 
                  key={goal.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    selectedGoal === goal.id ? 'ring-4 ring-purple-500' : ''
                  }`}
                  onClick={() => setSelectedGoal(goal.id)}
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${goal.color} flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-center">{goal.title}</CardTitle>
                    <CardDescription className="text-center text-base">
                      {goal.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {goal.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tudo Que Você Precisa
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ferramentas completas para sua jornada fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comece grátis ou desbloqueie todo o potencial com Premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative ${
                  plan.popular 
                    ? 'ring-4 ring-purple-500 shadow-2xl scale-105' 
                    : 'shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-1">
                      <Crown className="w-4 h-4 mr-1" />
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-6 text-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto Para Começar?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Junte-se a milhares de pessoas que já transformaram suas vidas
            </p>
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-6"
            >
              Iniciar Minha Jornada Agora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
