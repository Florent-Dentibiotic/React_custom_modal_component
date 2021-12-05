import { Modal } from './lib';

function App() {
  return (
    <>
      <h1>Publish npm package component with this boilerplate</h1>
      <Modal 
          zindex={'z-10'}
          backgroundAction={''}
          modalStyle={
              'p-9 border-4 flex flex-col justify-center items-center border-green-900 border-opacity-70 bg-white rounded overflow-hidden bg-scroll'
          }
          content={'Hello World !'}
          contentStyle={'m-5'}
          buttonStyle={
              'w-24 p-2 opacity-80 hover:opacity-100 rounded px-5 bg-green-900 text-white'
          }
          buttonAction={''}
          buttonContent={'Close'} />
    </>
  );
}

export default App;
