import React from 'react';
import Nav from '../../Components/Nav.js';
import Article from './Article';
import Aside from './Aside';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <section className='main_container'>
          <Article />
          <Aside />
        </section>
      </>
    );
  }
}

export default Main;
