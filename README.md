#MERN barebones boilerplate#
Contains all the essential goodies to get a MERN full stack application off the ground.

Eslinter
Babel
linter
Webpack
Mongodb
Node/Express

--Currently the docker-compose image does not work on mac os x due to a vmware bug WARNING (Windows & OS X): The default Docker setup on Windows and OS X uses a VirtualBox VM to host the Docker daemon. Unfortunately, the mechanism VirtualBox uses to share folders between the host system and the Docker container is not compatible with the memory mapped files used by MongoDB (see vbox bug, docs.mongodb.org and related jira.mongodb.org bug). This means that it is not possible to run a MongoDB container with the data directory mapped to the host.

##Running the code##
Clone the repo then start a mongodb instance (see note above if on mac). After the instance is running, start the server and the client.

Happy hacking!