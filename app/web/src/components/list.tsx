import { useState, useEffect } from "react";
import Item from "./item";

const list = (props) => {
    const [todolist, setTodolist] = useState([])
    console.log(todolist)
    useEffect(() => {
       get()   
    }, [props])
    
    const get = async () => {
        const res = await fetch("http://localhost:3200/api/getdata")
        const data: any = await res.json();
        setTodolist(data);
        props.changeRefresh(false);
        return data;
    }
    
    return (
        <div>
            <ul>
                {todolist.map((item: any, i) => (
                    <Item key={i} item={item} />
                ))}
            </ul>
        </div>
    )
}
export default list;
