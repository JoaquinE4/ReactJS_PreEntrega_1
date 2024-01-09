const ItemListContainer = ({ greeting }) => {
    return (
        <div className="alert alert-info container" role="alert">
           <p className="my-2">{greeting}</p>
        </div>
    )
}

export default ItemListContainer;