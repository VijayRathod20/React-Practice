export const Task = (props) => {
    return (
        <div className="task" key={props.id}
        style={{backgroundColor:props.completed ? 'green' : 'red'}}
        >
        <h2>{props.taskName}</h2>
        <button onClick={() =>props.completeTask(props.id)}>completed</button>
        <button onClick={()=>props.deleteTask(props.id)}>Delete</button>
      </div>
    )
}