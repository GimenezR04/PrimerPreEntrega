export const ItemListContainer = ({ classProps, hrefProps,name}) => {
    return (
        <li class="nav-item">
            <a class={classProps} aria-current="page" href={hrefProps}>{name}</a>
        </li>
    )
}