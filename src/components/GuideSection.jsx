const guides = [
  { id: 1, title: "Mystery of Asia", price: "$29", image: "/placeholder.png" },
  { id: 2, title: "Mystery of Europe", price: "$29", image: "/placeholder.png" },
  { id: 3, title: "Mystery of Australia", price: "$29", image: "/placeholder.png" },
  { id: 4, title: "Mystery of Africa", price: "$29", image: "/placeholder.png" },
  { id: 5, title: "Mystery of USA", price: "$29", image: "/placeholder.png" }
];

const GuideSection = () => {
  return (
    <div className="w-[800px] h-[325px] scale-[0.97] bg-black text-white px-6 py-8 mx-auto my-8">
      <h2 className="text-center text-base font-semibold mb-6 font-serif">
        Find your complete guide to everywhere you need to visit
      </h2>
      <div className="flex justify-between items-start gap-4 flex-wrap">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="w-[126px] h-[194px] bg-white text-black flex flex-col items-center justify-between p-3"
          >
            <img
              src={guide.image}
              alt={guide.title}
              className="h-20 w-full object-cover mb-2"
            />
            <p className="text-xs text-gray-600">{guide.price}</p>
            <h3 className="text-center text-sm font-medium mb-2">{guide.title}</h3>
            <button className="bg-black text-white text-xs px-4 py-1 hover:bg-gray-800 transition-colors">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideSection;
