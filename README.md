# :ticket: Retix :ticket:

## What this app is about

:wave:[Check out the deployed version](https://retix.netlify.app/):wave:

Retix is a mock ticket exchange application for users to sell and buy tickets online for upcoming events around the world. This project serves as the final assessment to graduate from Codaisseur.

## Table of contents

- [App demo](#App-demo)
- [Technology used](#technology-used)
- [Server-repo](#server-repo)

## App demo

##### Home Page

![retix_screenshot_1](https://user-images.githubusercontent.com/48523895/82328522-4bb37e80-99e0-11ea-9b6e-bd9ce75f83f1.png)

##### Event Detail Page

![retix_screenshot_2](https://user-images.githubusercontent.com/48523895/82328613-6a197a00-99e0-11ea-8915-2dc633b1eb7d.png)

##### Different Tickets for an Event

![retix_screenshot_3](https://user-images.githubusercontent.com/48523895/82328726-7e5d7700-99e0-11ea-8a46-5022e1297390.png)

##### Comment for Ticket

![retix_screenshot_4](https://user-images.githubusercontent.com/48523895/82328790-9634fb00-99e0-11ea-8984-61239479d92b.png)

## Technology used

:eyes::point_down: **Click links to see samples in this project** :point_down::eyes:

- [React](https://github.com/NicoleKuong/retix-client/blob/master/src/App.js)
- [Redux](https://github.com/NicoleKuong/retix-client/tree/master/src/actions)
- [Express](https://github.com/NicoleKuong/retix-server/blob/master/index.js)
- [REST API](https://github.com/NicoleKuong/retix-server/blob/master/ticket/router.js) -[Sequelize](https://github.com/NicoleKuong/retix-server/blob/master/user/model.js)
- [Fraud Calculation](https://github.com/NicoleKuong/retix-client/blob/master/src/components/TicketDetails/TicketDetailsContainer.js)
- [React-Bootstrap](https://github.com/NicoleKuong/retix-client/blob/master/src/components/Ticket/TicketForm.js)

## Server-repo

The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/NicoleKuong/retix-server)
