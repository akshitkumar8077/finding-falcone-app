# Installation

finding-falcone-app requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd finding-falcone-app
$ npm install
$ npm start
```

# App

GeekTrust Challenge : https://www.geektrust.in/coding-problem/frontend/space

Our coding challenges are set in the planet of Lengaburu. After the recent Falicornian war, King Shan has exiled Queen Al Falcone for 15 years. However, if he finds her before the 15 years are up, she has to go into exile for another 15 years!

King Shan has received intelligence that Al Falcone is hiding in one of six neighbouring planets. In this problem you need to build a UI through which King Shan can choose the planets to search, and the vehicles to use in Finding Falcone. See more details on planets & vehicles.

All geektrust problems are meant to be solved offline looking at considerations of OOPS, readability and simplicity.

# What you need to do

You need to build a UI (mockups available at the end of this PDF) through which King Shan can
• select 4 planets to search (out of the total 6)
• select which space vehicles to send to these planets
• see how much time it will take for the vehicles to reach their targets &
• show final result of success or failure

# What we give you

• a planets API that list out the planets, and how far they are from Lengaburu (https://findfalcone.herokuapp.com/
planets)
• a vehicles API that lists the types of space vehicle at your disposal, how many of each type you have, the
maximum distance a vehicle can go (range), and their speed (https://findfalcone.herokuapp.com/vehicles)
• a FindFalcone API that returns whether you were successful in your search or not (we randomly assign a planet
to Al Falcone) (https://findfalcone.herokuapp.com/find)
