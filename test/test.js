const assert = require('power-assert');
const Game = require('../src/Game');

describe('Bowling', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  };

  it('gutter game', () => {
    rollMany(20, 0);
    assert(game.score === 0);
  });

  it('all ones', () => {
    rollMany(20, 1);
    assert(game.score === 20);
  });
});
