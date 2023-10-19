import "./Speciality.css"

const Speciality = () => {
    return (
        <div className="speciality">
            <h3>ویژگی های سامانه نوبت دهی</h3>
            <div className="cards">
                <div className="card">
                    <div className="card-img">
                        <div className="img-one"></div>
                    </div>
                    <h4>آنلاین و بدون دردسر</h4>
                    <p>با استفاده از سامانه نوبت دهی میتوانید بدون مراجعه حضوری و به صورت آنلاین نوبت خود را دریافت کنید.</p>
                </div>
                <div className="card">
                    <div className="card-img">
                        <div className="img-two"></div>
                    </div>
                    <h4>ساده و راحت</h4>
                    <p>استفاده از این سامانه ساده است و به راحتی میتوانید نوبت خود را ثبت کنید.</p>
                </div>
                <div className="card">
                    <div className="card-img">
                        <div className="img-three"></div>
                    </div>
                    <h4>سریع و بدون اتلاف وقت</h4>
                    <p>استفاده از این سامانه موجب تسریع در مراحل ثبت نوبت شما شده و بدون اتلاف وقت نوبت خود را دریافت میکنید.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Speciality;