let mongoose = require('mongoose');

// define the game model
let game = require('../models/games');

// required for firebase
let firebase = require('../config/firebase');
let firebaseDB = firebase.games;
let firebaseAdmin = firebase.admin;
let firebaseAuth = firebase.auth;

// Read and display the Game List
module.exports.ReadGameList = (req, res) => {
  // find all games in the games collection
  game.find( (err, games) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.status(200).json(games);
      /*
      res.status(200).json({
        title: 'Games',
        games: games,
        displayName: req.user.displayName
      });
      */
    }
  });
}

// Create a new game and insert it into the db
module.exports.CreateGame = (req, res) => {
  let newGame = game({
      "name": req.body.name,
      "cost": req.body.cost,
      "rating": req.body.rating
    });

    game.create(newGame, (err, game) => {
      if(err) {
        console.log(err);
        res.status(500).end(err);
      }
    });
}

module.exports.GetGameById = (req, res) => {
  try {
      // get a reference to the id from the url
      let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // find one game by its id
      game.findById(id, (err, games) => {
        if(err) {
          console.log(err);
          res.end(error);
        } else {
          res.status(200).json({
              title: 'Game Details',
              games: games,
              displayName: firebaseAuth.currentUser ? firebaseAuth.currentUser.displayName : ''
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(400).redirect('/errors/404');
    }
}

// Update an existing Game in the games collection
module.exports.UpdateGame = (req, res) => {
  // get a reference to the id from the url
    let id = req.params.id;

     let updatedGame = game({
       "_id": id,
      "name": req.body.name,
      "cost": req.body.cost,
      "rating": req.body.rating
    });

    game.update({_id: id}, updatedGame, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      }
    });
}

// Deletes a game from the games collection
module.exports.DeleteGame = (req, res) => {
    // get a reference to the id from the url
    let id = req.params.id;

    game.remove({_id: id}, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      }
    });
}
