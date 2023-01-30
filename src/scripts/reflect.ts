const reflectTest = () => {
  const obj = {
    id: '123',
    name: 'Maciek',
  };

  Reflect.set(obj, 'name', 'Aga');
  console.log(Reflect.get(obj, 'name'));
  console.log(Reflect.has(obj, 'test'));
};

export default reflectTest;
