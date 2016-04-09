---
layout: post
title:  "Docker for Database Mock"
date:   2016-04-08 18:00:00
description: Docker for Database Mock
categories:
- devops, microservices, docker, tests, database
permalink: docker-for-database-mock
---

In the Java world the most popular approach to test with [mocked/in memory databases][1] is using H2 or HSQLDB. These databases work well and can emulate some database syntax and behavior, but like most emulations, this is superficial, imperfect and doesn't cover important database features.

So, sometime ago [I decided to create a Java library][5] to easily launch a docker container with a real database instance (like postgres, mysql and so on). This database will be running [in memory][1] and the process to do that is lightweight and quick, what is really useful for test purposes.


## Overview

![Alt text](https://cacoo.com/diagrams/KJIYGq2xh7iCL33h-D6350.png)


## Setup

#### Pull the database images
```sh
sudo docker pull postgres
```


#### Enable Docker remote REST API:
```sh
$ echo "DOCKER_OPTS='-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock'" > /etc/default/docker
$ service docker restart
```
[Read here more about it!][2]


#### Maven dependencies:

```xml
<repositories>
	<repository>
    	<id>in-memory-docker-database-mvn-repo</id>
        <url>https://raw.github.com/rafaelpsouza/in-memory-docker-database/mvn-repo/</url>
        <snapshots>
        	<enabled>true</enabled>
          	<updatePolicy>always</updatePolicy>
        </snapshots>
    </repository>
</repositories>
```


```xml
<dependency>
    <groupId>br.eng.rafaelsouza</groupId>
    <artifactId>in-memory-docker-database</artifactId>
    <version>1.0-SNAPSHOT</version>
	<scope>test</scope>
</dependency>
```


## How to use

Basically you need to add two annotations in your tests:

```java
@RunWith(DockerDatabaseRunner.class)
@DockerDatabaseConfig(type = DatabaseType.POSTGRES, port = 5432)
public class BlogRepositoryTest {
```

* **@RunWith(DockerDatabaseRunner.class)**: The test runner that will enable test listeners (start database before start tests and stop afterwards)
* **@DockerDatabaseConfig(type = DatabaseType.POSTGRES, port = 5432)**: The database configuration. **type** is the database that you want to launch (only Postgres 9.4 is supported at this monent). **port** the port that the database you listen for connections.

You can also see the example projects here:
[examples][3]

[1]: http://www.martinfowler.com/bliki/InMemoryTestDatabase.html
[2]: http://infoslack.com/devops/exploring-docker-remote-api/
[3]: https://github.com/rafaelpsouza/in-memory-docker-database/tree/master/examples/
[4]: mailto:rafael.bnc@gmail.com
[5]: https://github.com/rafaelpsouza/in-memory-docker-database/