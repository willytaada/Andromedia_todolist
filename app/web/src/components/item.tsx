const item = (props) => {
    const update = async () => {
        props.item.done = !props.item.done
        const res = await fetch(`http://localhost:3200/api/update?id=${props.item.id}`, {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                done:  props.item.done,
                title: props.item.title
            })
        })
        alert("Data Berhasil Diupdate")
        props.changeRefresh(true);
        return res;
    }

    const deleteData = async () => {
       const res = await fetch(`http://localhost:3200/api/delete?id=${props.item.id}`) 
       alert("Data Berhasil Dihapus")
       props.changeRefresh(true);
       return res; 
    } 
        
    return (
        
        <li className={`${props.item.done ? "line-through" : ""}`}>
            <div onClick={update}>{props.item.title}</div>
            <button onClick={deleteData}>Delete</button>

        </li>
    )
    }

export default item;