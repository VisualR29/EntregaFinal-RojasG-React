import { FaCartArrowDown } from "react-icons/fa";

function CartWidget() {
    return (
        <div className="navbar-item Cartwidget">
            <p>0</p>
            <FaCartArrowDown />
        </div>
    )
}

export default CartWidget;