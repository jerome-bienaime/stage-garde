export default function TodoList({ children }) {
  return (
    <div className="todo-list pt-4 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4">
      {children}
    </div>
  );
}
