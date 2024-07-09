
export  default function Todos({ todos }) {
    return (
      <div>
        {todos.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <h2>{item.description}</h2>
            <button>{item.completed ? "Completed" : "Mark as Completed"}</button>
          </div>
        ))}
      </div>
    );
  }
