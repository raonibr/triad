import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  hand_cards: [
  	{_id: "1", top: 1, bot: 8, left: 7, right: 6},
  	{_id: "2", top: 5, bot: 7, left: 1, right: 6},
  	{_id: "3", top: 8, bot: 3, left: 8, right: 2},
  	{_id: "4", top: 1, bot: 8, left: 0, right: 0},
  	{_id: "5", top: 2, bot: 9, left: 3, right: 2},
  	{_id: "6", top: 0, bot: 1, left: 5, right: 9}
  ]
});

Template.game_board.helpers({
	board_rows: [0,1,2,3],
  board_columns: [0,1,2]
});