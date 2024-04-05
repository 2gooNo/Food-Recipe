"use client";

export function Category({ category }) {
  return (
    <div className="flex flex-col justify-center items-center h-[200px] w-[300px] gap-[30px] hover:text-[#ff6430] transition-colors duration-400 ease-in-out mb-[60px]">
      <img className="w-[260px] text-[bold]" src={category.picture} />
      <h3 className="h-[300px]">{category.name}</h3>
    </div>
  );
}
