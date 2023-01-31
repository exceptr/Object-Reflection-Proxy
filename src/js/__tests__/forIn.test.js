import orderByProps from '../forIn';

test('Сортировка', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const expectedResult = [
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(obj, ['level', 'name'])).toEqual(expectedResult);
});
