function ToDo(){
    function callFun(){
        alert("function called")
    }

    return(
        <div>

            <h1></h1>
            <img src="https://picsum.photos/300/200" alt="" className="photo"/>
            <ul>
                <li>Invent Traffic Lights</li>
                <li>Improve Spectrum Technology</li>
            </ul>
            <button onClick={callFun}>Click Me!</button>
        </div>
    )
}
export default ToDo;