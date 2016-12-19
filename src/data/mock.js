module.exports = [
	{
		"id": 1,
		"seq": 1,
		"first": true,
		"last": false,
		"matches": [
		{
			"id": 1,
			"player_a": {
				"id": 1,
				"img": "",
				"name": "player1",
				"score": 2
			},
			"player_b": {
				"id": 2,
				"img": "",
				"name": "player2",
				"score": 1
			},
			"parent": 12
		},
		{
			"id": 2,
			"player_a": {
				"id": 3,
				"img": "",
				"name": "player3",
				"score": 2
			},
			"player_b": {
				"id": 4,
				"img": "",
				"name": "player4",
				"score": 1
			},
			"parent": 12
		},
		{
			"id": 3,
			"player_a": {
				"id": 5,
				"img": "",
				"name": "player5",
				"score": 2
			},
			"player_b": {
				"id": 6,
				"img": "",
				"name": "player6",
				"score": 1
			},
			"parent": 34
		},
		{
			"id": 4,
			"player_a": {
				"id": 7,
				"img": "",
				"name": "player7",
				"score": 2
			},
			"player_b": {
				"id": 8,
				"img": "",
				"name": "player8",
				"score": 1
			},
			"parent": 34
		}]
	},
	{
		"id": 2,
		"seq": 2,
		"first": false,
		"last": false,
		"matches": [
		{
			"id": 12,
			"player_a": {
				"id": 1,
				"img": "",
				"name": "player1",
				"score": 2
			},
			"player_b": {
				"id": 3,
				"img": "",
				"name": "player3",
				"score": 1
			},
			"parent": 1234
		},
		{
			"id": 34,
			"player_a": {
				"id": 6,
				"img": "",
				"name": "player6",
				"score": 2
			},
			"player_b": {
				"id": 7,
				"img": "",
				"name": "player7",
				"score": 1
			},
			"parent": 1234
		}]
	},
	{
		"id": 3,
		"seq": 3,
		"first": false,
		"last": true,
		"matches": [
		{
			"id": 1234,
			"player_a": {
				"id": 1,
				"img": "",
				"name": "player1",
				"score": 2
			},
			"player_b": {
				"id": 7,
				"img": "",
				"name": "player7",
				"score": 1
			},
			"parent": -1
		}]
	}
]