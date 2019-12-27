import Team from '../src/team';
import Character from '../src/character';


test('Добавление нового персонажа', () => {
  const player = new Character('Fro');
  const team = new Team();
  team.add(player);
  const expected = [{
    name: 'Fro',
    health: 100,
    level: 1,
  }];
  const received = team.toArray();

  expect(received).toEqual(expected);
});

test('Добавление новых персонажей', () => {
  const player = new Character('Fro');
  const player2 = new Character('Bob');
  const team = new Team();
  team.addAll(player, player2);
  const expected = [{
    name: 'Fro',
    health: 100,
    level: 1,
  },
  {
    name: 'Bob',
    health: 100,
    level: 1,
  }];
  const received = team.toArray();

  expect(received).toEqual(expected);
});

test('Дублирование персонажа', () => {
  const player = new Character('Fro');
  const team = new Team();
  team.add(player);
  expect(() => team.add(player)).toThrow();
});

test('Добавление повторяющихся персонажей', () => {
  const player = new Character('Fro');
  const player2 = new Character('Bob');
  const team = new Team();
  team.addAll(player, player2, player, player2);
  const expected = [{
    name: 'Fro',
    health: 100,
    level: 1,
  },
  {
    name: 'Bob',
    health: 100,
    level: 1,
  }];
  const received = team.toArray();

  expect(received).toEqual(expected);
});
