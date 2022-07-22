import React from 'react'
import {useNavigate} from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleResult = () => {
        navigate('/result')
    }
  return (
    <nav className='nav bg-light sticky-top py-4'>
        <button className='nav-item btn btn-lg btn-success w-25 m-auto' onClick={handleResult}>Result</button>
    </nav>
  )
}

export default Header