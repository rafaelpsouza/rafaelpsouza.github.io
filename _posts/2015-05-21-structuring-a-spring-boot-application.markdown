---
layout: post
title:  "Structuring a Spring Boot Application"
date:   2015-05-21 02:20:00
description: In his post about Clean Architecture, Uncle Bob explains how to achieve separation of concerns dividing the software into layers following The Dependency Rule. In this post I show a Spring Boot example project structured using the Clean Architecture concept.
categories:
- spring-boot, clean-architecture, design
permalink: structuring-a-spring-boot-application
---

Two of the main aspects of Software Design and Architecture are [Separation of Concerns](http://c2.com/cgi/wiki?SeparationOfConcerns) and [Dependency Management](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod). In his post about [Clean Architecture](http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html), Uncle Bob explains how to achieve separation of concerns dividing the software into layers following The Dependency Rule. 

Using the [Clean Architecture](http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html) concept I've used [Spring Boot](http://projects.spring.io/spring-boot/) and [Gradle Multi-Project Build](https://docs.gradle.org/current/userguide/multi_project_builds.html) to create a [example application](https://github.com/rafaelpsouza/spring-boot-spikes/tree/master/multi-projects) divided into projects that have clear concerns/responsibilities and follow The Dependency Rules.

The example uses [Spring Boot](http://projects.spring.io/spring-boot/) and [Jersey](https://jersey.java.net/) to create a standalone application that exposes a RESTful endpoints. This is a simple example, but it can be easily transferred to a real-world applications (a [Microservices](http://microservices.io/) for example).

## Projects and Concepts


 - multi-projects: the root project with the plugin definitions and the common dependencies.
 - service-app: responsible for configure and run the application execution. 
 - service-endpoints: It has the versioned endpoints. 
 - service-implementation: It encapsulates the application specific business rules.

Depending on the need, this structure can be composed by more then these four projects, the important thing is to have projects with a clear concept following The Dependency Rule. The idea behind the use of this kind of structure is to make a reinforcement of where the developers have to put their code aiming the loose coupling and a clear separation of concerns.


## Project Code and My Spring Boot Spikes

[https://github.com/rafaelpsouza/spring-boot-spikes/tree/master/multi-projects](https://github.com/rafaelpsouza/spring-boot-spikes/tree/master/multi-projects)
[https://github.com/rafaelpsouza/spring-boot-spikes](https://github.com/rafaelpsouza/spring-boot-spikes)