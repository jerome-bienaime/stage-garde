import TodoPriceSum from "./TodoPriceSum";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import PageHeader from "./PageHeader";

export default function PageOfList({ page }) {
  return (
    <>
      <PageHeader
        title={page.title}
        number={page.number}
        qrcode={page.qrcode}
      ></PageHeader>
      <div className="page-body">
        <TodoPriceSum itemList={page.items} />
        <TodoList>
          {page.items.map(
            ({ name, link, description, mainImage, price }, index) => {
              return (
                <TodoItem
                  key={index}
                  name={name}
                  link={link}
                  description={description}
                  mainImage={mainImage}
                  price={price}
                  index={index}
                />
              );
            }
          )}
        </TodoList>
      </div>
    </>
  );
}
