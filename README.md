401 JS --  Lab 06 wack chat
===

## Description
  Nickname command and dm commands copied over prework from the lecture today. Ban command used a similar protocol to the dm command except "s.write" was replaced with "s.end". Originally, I tried using "s.destroy" but that killed the entire server. Users command initially tried using a method called "server.getconnections" which gave the total number of connections but did not elaborate further. Changed this up by adding a forEach loop and just iterating throughout the entire array to find each individual user. Troll command uses a for loop and just iterates through the same message 10 times to annoy other users.
