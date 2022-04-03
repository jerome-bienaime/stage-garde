export default function TodoList({children}) {
    return (
        <div className="todo-list pt-4 grid grid-cols-4 gap-4">
            {children}
        </div>
    )
}