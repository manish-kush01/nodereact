import './App.css';

function Profile(){
    return(
    <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    )
  }
  
  function myApp() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile size={100}/>
        <Profile size={80}/>
        <Profile size={50}/>
      </section>
    );
  }
  
  
  export default myApp;