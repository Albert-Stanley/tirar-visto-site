# Tirar Visto
Uma landing page moderna e responsiva desenvolvida para teste técnico.  
Este projeto destaca-se por sua escalabilidade e estrutura robusta.

---

## Visão Geral do Projeto

Esta landing page foi construída seguindo fielmente o design fornecido no Figma, garantindo uma experiência visual e funcional moderna e responsiva.  
O projeto utiliza **React.js** com **TypeScript** para garantir robustez e escalabilidade, e é estilizado com **Tailwind CSS** para uma estilização rápida e modular.

A estrutura modular do código facilita a manutenção, o reaproveitamento de componentes e futuras expansões.

---

## Estrutura do Projeto

A pasta principal `src/` está organizada da seguinte forma para melhor organização e legibilidade:

```plaintext
src/
├── assets/    //imagens, icones, imagens de fundo
│   ├── images/ 
│       ├── destinos/
│   └── icons/    
│
├── components/
│   ├── ui/                        # Componentes de UI puros
│   │   ├── DestinationCard.tsx    // Card da seção de destinos
│   │   ├── ScrollToTopButton.tsx  // Botão que ao ser clicado volta ao inicio da página
│   │   ├── StepItem.tsx           // Item da seção de steps
│   │   └── SectionTitle.tsx       // Componente para títulos de seção (ex: "Destinos mais procurados")
│   │
│   ├── layout/                    # Layout geral da aplicação
│   │   ├── Header.tsx             // O cabeçalho da seção hero(primeira seção)
│   │   ├── DestinationHeader.tsx  // O cabeçalho da seção de destinos
│   │   ├── Card.tsx               // Card da seção de pacotes
│   │
│   └── sections/                  # Seções da landing page
│       ├── Hero.tsx               // A primeira seção (Tire seu visto...)
│       ├── Banner.tsx             // Seção "Consultoria Completa"
│       ├── Steps.tsx              // Seção "Etapas para tirar o visto"
│       ├── Destinations.tsx       // Seção "Destinos mais procurados"
│       ├── Packages.tsx           // Seção "Confira nossos pacotes"
│       └── Footer.tsx             // Rodapé
│
├── data/  
│   └── destinationsData.ts       // Dados para a seção de destinos
│
├── App.css                        // Estilos globais e setup do Tailwind
│
├── App.tsx                       // Componente principal que monta a página
└── main.tsx                      // Ponto de entrada da aplicação

```

## Tecnologias Utilizadas

- **React.js:** Biblioteca para construção de interfaces reativas e declarativas.  
- **TypeScript:** Tipagem estática para maior segurança e facilidade de manutenção.  
- **Tailwind CSS:** Framework CSS utilitário que permite estilização rápida e consistente.  
- **Figma:** Design base para implementação visual fiel à proposta do projeto.  

---
