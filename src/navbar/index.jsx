import { ItemListContainer } from "../ItemListContainer"
export const Navbar = ({cart,setCart}) => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">XpressGame</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav carrito">
                            <ItemListContainer classProps="nav-link active" hrefProps="#" name="Home"/>
                            <ItemListContainer classProps="nav-link" hrefProps="#" name="Features"/>
                            <ItemListContainer classProps="nav-link" hrefProps="#" name="Pricing"/>
                            <img width="40px" height="40px"src="https://imgs.search.brave.com/wbZi1ArjacBd63jRdenHsAvBcau-duD2GX_JNTKvU1c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTcvUE5HLzk2LzE0/ODU0NzcwNjEtY2Fy/dF83ODU4NS5wbmc" alt="a" onClick={()=>setCart(!cart)}></img>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}