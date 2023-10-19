const ClosureAndIffe = () => {

    function closure() {
        let x = 5
        return function inner() {
            x += 5
            console.log(x)
        }
    }

    const test = closure()

    const iife = (function () {
        console.log('iife fnc!!')
        test()
        test()
        test()
    })()


    return (
        <div>
        </div>
    );
}

export default ClosureAndIffe;