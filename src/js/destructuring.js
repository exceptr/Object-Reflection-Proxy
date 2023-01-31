export default function getSpecial(obj) {
  const result = [];
  obj.special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
