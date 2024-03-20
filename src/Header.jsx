import React from 'react';
import logo from './logo.png';


const Header = ({ title, subtitle }) => {

  const titleStyle = {
      color: '#000',
      fontSize: '36px',
      fontFamily: 'Open Sans',
      fontWeight: 'bold'
    };
  
    const subtitleStyle = {
      color: '#000',
      fontSize: '16px',
      fontFamily: 'Open Sans'
    };


  return (
    <header className="p-4 flex justify-between items-center">
      <div className="flex lg:space-x-72">
        <img src={logo} alt="Logo" className="h-8 mr-2" /> {/* Include the logo */}
          <div className="flex justify-center items-center flex-col pt-8">
              <h1 style={titleStyle}>{title}</h1>
              <h2 style={subtitleStyle}>{subtitle}</h2>
          </div>
      </div>
      
    </header>
  ); 
}

export default Header;