"use client";

const FoodList = ({ categories, onSelectCategory }) => {
  // Kontrollera att categories inte är undefined
  if (!categories) {
    return <p>No categories available</p>;
  }

  return (
    <div className="hidden lg:flex flex-row justify-evenly mx-24 mt-8">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => onSelectCategory(category)}
        >
          <img className="w-[60px]" src={category.icon} alt={category.name} />
          <h3 className="font-light text-md">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
