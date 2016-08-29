Vagrant::Config.run do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.forward_port 4000, 4000
  config.vm.provision :shell,
    :inline => "sudo apt-get update && sudo apt-get -y install nodejs && sudo apt-get -y install build-essential git ruby2.3.1 && sudo gem install github-pages --no-ri --no-rdoc"
  config.ssh.forward_agent = true
end
