import React, { Fragment, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import KakaoLogin from 'react-kakao-login';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {useCookies} from 'react-cookie';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let d = new Date();
d.setTime(d.getTime() + (1*60*0.1));
cookies.set('myCat', 'Pacman', { path: '/', expires: d });
console.log(cookies.get('myCat')); // Pacman






// componentDidMount() {
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
// }


// const setCookie=(minutes) => {
//   let d = new Date();
//   d.setTime(d.getTime() + (minutes*60*0.1));

//   useCookies.set("onboarded", true, {path: "/", expires: d});
// };

function App() {

useEffect(
() => {
    axios.get(`https://kauth.kakao.com/oauth/authorize?client_id=bb2ee98827cc60db7edf12117ad26fca&redirect_uri=www.google.com&response_type=code`, {headers: {
      'Access-Control-Allow-Headers': 'Authorization, KA, Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Origin': '*'
    }})
      .then(res => {
        // const persons = res.data;
        // this.setState({ persons });
        console.log("conosle", res);
      })
      .catch(error => {
        console.log(error)
        
    })
  
    }
)
  
  return (
    <div className="App" >
      <header className="App-header">


      <Fragment>
            {/* <p><code>No options</code></p>
            <KakaoLogin
              jsKey={key}
              onSuccess={success}
              onFailure={failure}
            />
            <p>Change button text with <code>buttonText</code></p>
            <KakaoLogin
              jsKey={key}
              onSuccess={success}
              onFailure={failure}
              buttonText="Button Text"
            /> */}
            <p> KakaoLogin component with <code>useDefaultStyle</code></p>
            <KakaoLogin
              jsKey={key}
              onSuccess={success}
              onFailure={failure}
              useDefaultStyle
            />


            {/* <p>Pass component that is styled as <code>children</code></p>
            <KakaoLogin
              jsKey={key}
              onSuccess={success}
              onFailure={failure}
            >
              <Italic>Children</Italic>
            </KakaoLogin>
            <p>Pass <code>className</code> to style component</p>
            <KakaoLogin
              jsKey={key}
              onSuccess={success}
              onFailure={failure}
              className="css-with-class"
            />
            <p>Pass <code>render</code> function to render fully customized component</p>
            <KakaoLogin
              jsKey={key}
              onSuccess={success}
              onFailure={failure}
              render={props => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.onClick();
                  }}
                >
                  Render Prop
                </a>
              )}
            />
            <p>Use <code>third party</code>, like <code>styled-components</code></p>
            <StyledKakaoLogin
              jsKey={key}
              onSuccess={success}
              onFailure={failure}
            /> */}
            
        </Fragment>
         
      </header>
    </div>
  );
}


const key = 'e8f211096da02fceca5f216fbf78b0b4';

const success = (response) => {
  console.log(response);
  //setCookie(1);
};

const failure = (error) => {
  console.log(error);
};

const Italic = styled.i`
  color: #3c1e1e;
  font-size: 20px;
  font-weight: 700;
`;

const StyledKakaoLogin = styled(KakaoLogin)`
  display: inline-block;
  padding: 0;
  width: 222px;
  height: 49px;
  line-height: 49px;
  color: #3C1E1E;
  background-color: #FFEB00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
`;


export default App;
