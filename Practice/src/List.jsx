function List(props){
    const itemlist=props.list;
    const listItems=itemlist.map(item=><li>{item}</li>)
    return(
        <>
        <div className="list">
            <h1>List</h1>
            <ul>{listItems}</ul>
        </div>

        </>

    )
}

export default List