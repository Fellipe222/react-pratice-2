import img_earth from './img/earth.png'
export default function Navbar(){
    return(
      <nav>
        <img src={img_earth} className='nav--logo' alt='logo'></img>
        <span className='nav--title'>Para onde viajar?</span>
      </nav>
    )
  }