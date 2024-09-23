import { useState } from "react"
import { CartWidget } from "./CartWidget"
import { Navbar } from "./navbar"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

export const App = () => {

    const [cart, setCart] = useState(false)

    return (
        <div>
            
            <Navbar cart={cart} setCart={setCart}/>
           {cart && <CartWidget/> }


        </div>
    )
}