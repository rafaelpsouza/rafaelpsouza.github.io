---
layout: post
title:  "Vagrant Multi-Machine and Microservices"
date:   2016-04-17 02:31:00
description: How I use Vagrant multi-machine to help me in a microservices project.
categories:
- devops, microservices, vagrant, haproxy, spring
permalink: vagrant-multi-machine-and-microservices
---

[Vagrant](https://www.vagrantup.com/) is a really useful tool in the DevOps era. 	I’ve been using it for almost three years and I can’t say how much it has helped me in the work and studies/evaluations/POCs.

In simple words, Vagrant is a software that provides a easy way to configure, share and manage virtual machines aiming to create portable work environments. Vagrant can be handy for developers, specially when they want to isolate environment dependencies or replicate the production environment. It’s also helpful for operation engineers who want to test the infrastructure management scripts.

Last year I designed and coded a [Microservices](http://martinfowler.com/articles/microservices.html) architecture for an e-commerce backend. In this kind of application and solution you must evaluate assumptions, tools, frameworks and concepts as the interaction between them. It's part of the job figure out an productive and trustworthy way to do that.

Although I worked through almost all [Vagrant features](https://www.vagrantup.com/docs/) like: share, provisioning, boxes, networking etc. the one that is really helped me, in that project, was [Vagrant multi-machine](https://www.vagrantup.com/docs/multi-machine/).

Vagrant multi-machine has enabled me to replicate how the servers are arranged through the project's infrastructure. Thus I could easily validate the communication and configuration of some architecture's [containers and components](http://static.codingthearchitecture.com/c4.pdf) as well as continuous integration tools and scripts.

The image below shows a simple example of servers infrastructure:

![Image](../assets/img/servers.png)

The [Vagrantfile]() that replicate this topology:

{% highlight ruby %}

Vagrant.configure(2) do |config|
	config.vm.synced_folder ".", "/vagrant", disabled: true

	config.vm.define "loadbalancer" do |loadbalancer|
		loadbalancer.vm.box = "ubuntu/trusty64"
		loadbalancer.vm.network "private_network", ip: "192.168.80.3"
		loadbalancer.vm.provision "ansible" do |ansible|
    		ansible.playbook = "haproxy.yml"
 		end
	end

	config.vm.define "services1" do |services1|
		services1.vm.box = "ubuntu/trusty64"
		services1.vm.network "private_network", ip: "192.168.80.4"
		services1.vm.provision "ansible" do |ansible|
    		ansible.playbook = "service.yml"
 		end
	end

	config.vm.define "services2" do |services2|
		services2.vm.box = "ubuntu/trusty64"
		services2.vm.network "private_network", ip: "192.168.80.5"
		services2.vm.provision "ansible" do |ansible|
    		ansible.playbook = "service.yml"
 		end
	end
end


{% endhighlight %}

In this example I configured a multi-machine environment using a [private network](https://www.vagrantup.com/docs/networking/private_network.html) to make a network between multiple machines and the host. I chose to use Static IP in this case (because I didn’t have service discovery yet)  but it’s also possible to use DHCP to configure a Vagrant private network.

Using these vagrant features could easily evaluate the communication between the [HAproxy](http://www.haproxy.org) Load Balancer and backend services validating configuration options such as log, http-check, stats etc. 

Example project source: [https://github.com/rafaelpsouza/haproxy-spring-boot](https://github.com/rafaelpsouza/haproxy-spring-boot)