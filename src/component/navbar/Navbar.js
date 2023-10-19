import './Navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
               <div className="img"></div>
            </div>
            <div className="items">
                <h5>صفحه اصلی</h5>
                <h6>نوبت دهی آنلاین</h6>
                <h6>وضعیت مرز ها</h6>
                <h6>درباره ما</h6>
                <h6>ارتباط با ما</h6>
            </div>
        </div>
     );
}
 
export default Navbar;