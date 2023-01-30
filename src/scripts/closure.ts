const closureTest = () => {
  const makeAdder = (x: number) => (y: number) => x + y;
  const add2 = makeAdder(2);

  console.log(add2(1));

  const makePrivateProps = () => {
    let count = 0;

    return {
      getCount: () => count,
      increment: () => {
        count++;
      },
      decrement: () => {
        count--;
      },
    };
  };

  const privateProps = makePrivateProps();

  console.log('count is', privateProps.getCount());
  privateProps.increment();
  console.log('count is', privateProps.getCount());
};

export default closureTest;
