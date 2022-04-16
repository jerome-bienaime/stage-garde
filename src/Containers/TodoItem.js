export default function TodoItem({
  index,
  name,
  link,
  description,
  mainImage,
  price,
}) {
  return (
    <div
      className="todo-item shadow p-2 rounded border-gray-200 border grid grid-flow-col grid-rows-5"
      key={index}
    >
      <div className="item-image row-span-3">
        <img src={mainImage} alt="" />
      </div>
      <div className="item-name flex items-center justify-between row-span-1">
        <span className="text font-bold uppercase text-center">{name}</span>
        <a
          className="item-link-href text-blue-500 underline text-xs"
          href={link}
        >
          lien
        </a>
      </div>
      <div className="row-span-1 grid grid-cols-1 grid-rows-3">
        <div className="item-description col-span-8 text-xs text-zinc-800 row-span-2">
          {description}
        </div>
        <div className="item-price  text-orange-400 text-right w-full font-bold row-span-1">
          <span className="text">{price}</span>
          <sup className="text-xs">&euro;</sup>
        </div>
      </div>
    </div>
  );
}
