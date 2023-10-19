import "./Header.css"

const Header = () => {
    return (
        <div className="container">
            <div className="description-holder">
                <div className="description">
                    <h4>سامانه</h4>
                    <h3>نوبت دهی ناوگان در مرز</h3>
                    <p>در این سامانه شما میتوانید برای خدمات گمرک به صورت آنلاین و بدون مراجعه حضوری نوبت دریافت کنید.در این سامانه شما میتوانید برای خدمات گمرک به صورت آنلاین و بدون مراجعه حضوری نوبت دریافت کنید.</p>
                    <div className="buttons">
                        <button>نوبت دهی آنلاین</button>
                        <button className="estelam">استعلام نوبت</button>
                    </div>
                </div>
            </div>
            <div className="header-img">
                <div className="img-holder">
                    <div className="img-header"></div>
                </div>
            </div>
        </div>
    );
}

export default Header;