export default function TodoPriceSum({ itemList }) {
  console.log(itemList);
  const sum = itemList.reduce(
    (prev, current) => {
      const result = {
        price: parseFloat(prev.price) + parseFloat(current.price),
      };
      return result;
    },
    { price: 0 }
  );
  const price = parseFloat(sum.price).toFixed(2);
  return (
    <div className="flex justify-center items-center mt-8">
      <span className="font-semibold">TOTAL</span>
      <span className="text-orange-500 font-bold mx-2 text-2xl">{price}€</span>
    </div>
  );
}
