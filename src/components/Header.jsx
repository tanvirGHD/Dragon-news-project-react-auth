import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-3'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <h2 className='text-gray-500 text-lg '>Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;