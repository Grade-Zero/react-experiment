## Docker on windows:

Every damn time I spend hours trying to get around the error:
- docker: Cannot connect to the Docker daemon at tcp://localhost:2375. Is the docker daemon running?

I think part of what throws me off is that docker for windows already exposes the daemon without TLS, that option is active
I try a million bash commands, no dice

So, this must be remembered forever:
- Open docker for windows settings, UNTICK expose daemon option
- docker will restart
- once that's done, tick it again
- Once started it will now actually be exposed, not just pretending to be

If after that it doesn't work via bash, the ticked answer in this thread has the solution:
https://stackoverflow.com/questions/48047810/cannot-connect-to-the-docker-daemon-on-bash-on-ubuntu-windows

* It's an assumption that the thread will help, but once the daemon is properly exposed I've not had it fail to work