import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-des">
                    <h4 className='footer-title'>سامانه نوبت دهی ناوگان در مرز</h4>
                    <p>در این سامانه شما میتوانید برای خدمات گمرک به صورت آنلاین و بدون مراجعه حضوری نوبت دریافت کنید.در این سامانه شما میتوانید برای خدمات گمرک به صورت آنلاین و بدون مراجعه حضوری نوبت دریافت کنید.</p>
                </div>
                <div className="address">
                    <div className="address-item">
                        <div className="logo-holder-address">
                            <div className="logo-address-1"></div>
                        </div>
                        <p className='address-des'>تهران، خیابان ایتالیا پلاک ۷۰ واحد سوم</p>
                    </div>
                    <div className="address-item">
                        <div className="logo-holder-address">
                            <div className="logo-address-2"></div>
                        </div>
                        <p className='address-des'>۰۲۱-۴۵۱۷۵۰۰۰</p>
                    </div>
                    <div className="address-item">
                        <div className="logo-holder-address">
                            <div className="logo-address-3"></div>
                        </div>
                        <p className='address-des'>info@netbar.org</p>
                    </div>
                </div>
                <div className="social-logo-container">
                    <div className="social-logo-holder">
                        <div className="social-logo-1"></div>
                    </div>
                    <div className="social-logo-holder">
                        <div className="social-logo-2"></div>
                    </div>
                    <div className="social-logo-holder">
                        <div className="social-logo-3"></div>
                    </div>
                </div>
            </div>
            <p className='footer-end'>حقوق مادی و معنوی این سرویس (وب سایت و اپلیکیشن های موبایل) نت بار است.</p>
        </div>

    );
}

export default Footer;