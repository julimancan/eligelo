export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};



const index = () => {
  return <div>Enter</div>;
};

export default index;
