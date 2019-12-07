import React from 'react';

function Home(){
  return(
    <div className="home">
      <style jsx>
        {`
          p {
            color: black;
          }
          .home {
            margin-top: 50px;
          }
        `}
      </style>
      <div>
        <p>hello</p>
      </div>
    </div>
  );
}

export default Home;