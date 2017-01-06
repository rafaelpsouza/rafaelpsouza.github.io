---
layout: post
title:  "Para o usuário final, a experiência é o que importa"
date:   2017-06-01 11:00:00
description: A experiência do usuário (UX) é fundamental para um software, e é uma consequência de alguns aspectos, entre eles, características do sistema que não estão relacionadas a usabilidade ou a interface do usuário (UI).
categories:
- engineering, ux
permalink: experiência-eh-o-que-importa
---

Há um tempo, quando eu estava fazendo uma consultoria de arquitetura de software, ouvi de um consultor de negócios a seguinte afirmação:
> A única coisa que importa em um software é a sua interface (UI)

Discordei na hora e enumerei alguns motivos pelos quais eu não acredito na afirmação. Quem me conhece sabe que eu discordo, pois penso que a forma com que o software é desenvolvido (ferramentas, tecnologias, design, arquitetura, técnicas, métodos etc) importa muito.
A discussão não foi muito longa, mas como esse consultor é  uma pessoa que eu considero ter uma boa visão sobre tecnologia, eu tentei entender o que estaria por trás daquela afirmação.

Logo que comecei a pensar um pouco, lembrei de uma das “99 coisas que todo arquiteto de software deveria saber” (um dos primeiros livros que eu lí sobre arquitetura de software - mediano):
> For the end-user, the interface is the system. 
> -- Vinayak Hegde, 99 Things Every Software Architect Should Know

Discordo de ambas afirmações, pois acredito que uma imprecisão, muito comum, é repetida em ambas: A confusão entre User Interface, Usability e User eXperience.
Vou explicar partindo de algumas definições:

* **User Interface:** The means by which the user and a computer system interact, in particular the use of input devices and software. (Oxford Dictionaries)
* **Usability:** The fact of something being easy to use, or the degree to which it is easy to use (Cambridge Dictionary)
* **User eXperience:**  A person's perceptions and responses that result from the use or anticipated use of a product, system or service.
-- ISO 9241-210 (Ergonomics of human-system interaction)

Embora interface, usabilidade e experiência de usuário estejam relacionadas elas são diferentes. Usabilidade é sobre o quão fácil e intuitivo é utilizar a interface do sistema, já experiência de usuário é muito mais amplo e está relacionado com o modo que o indivíduo se sente quando utiliza determinado sistema/produto/aplicação.

Voltando as afirmações do consultor e do livro:
É importante um software ter uma boa interface? Sim. É importante ter uma boa usabilidade? Sim. Mas, estas, são apenas duas de muitas características de experiência de usuário (ou apenas UX). 

**UX é uma consequência de aspectos mais amplos, como** [1]: 
* **O estado interno do usuário:** predisposições, expectativas, necessidades e experiência anterior.
* **Características do sistema:** tempo de resposta, disponibilidade, usabilidade e funcionalidade.
* **Contexto:** qual é o contexto de uso do sistema, quem utiliza, por qual motivo e o que está envolvido.

Cada um desses três aspectos deve ser trabalhado com técnicas e ferramentas diferentes e fica claro, principalmente se olharmos para para o aspecto das características do sistema, que a forma como o software é desenvolvido  (ferramentas, tecnologias, design, arquitetura, técnicas, métodos etc) causam grande impacto na experiência do usuário. Exemplifico:

Performance e escalabilidade, que são conceitos amplamente trabalhados em arquitetura de software, impactam diretamente no tempo de resposta que é uma forte característica de UX.
Práticas de programação como TDD, integração contínua, design simples etc. impactam nas funcionalidades existentes do software e na velocidade de entrega de novas funcionalidades o que também é importante para UX.

Por fim, prefiro a seguinte afirmação:

> Para o usuário final, a experiência é o que importa.
> -- Rafael Souza, 2017

## Referências:

[1]: Hassenzahl, M. & Tractinsky, N. 2006, User Experience – a Research Agenda. Behaviour and Information Technology, Vol. 25, No. 2, March–April 2006, pp. 91-97