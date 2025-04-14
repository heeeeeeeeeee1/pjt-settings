interface Test {
  name: string;
}

type A = string;

const Home = () => {
  const test: Test = { name: '11111' };
  const firstcase: A = 'aaa';

  return (
    <>
      <div>안녕</div>
      <p>{test.name}</p>
      <p>{firstcase}</p>
    </>
  );
};
export default Home;
