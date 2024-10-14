import { TypeAnimation } from 'react-type-animation';

const Type = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center'>
      <TypeAnimation
        sequence={[
          'My name is Hassan Barmandah',
          1000,
          'My name hello',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '30px', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};
export default Type;