const guides = [
  {
    id: 1,
    title: "Spa Day Gift Set",
    price: "$45",
    image: "https://media.istockphoto.com/id/1415188133/photo/fresh-skincare-face-mask-and-healthy-skin-treatment-for-bonding-mother-and-daughter-home-spa.jpg?s=612x612&w=0&k=20&c=CdiWuHSaG-6hE4QN1t98Xhqp11KP8wHYeYFuknpZKEM=" // Spa gift
  },
  {
    id: 2,
    title: "Personalized Jewelry",
    price: "$60",
    image: "https://blogapi.perrian.com/wp-content/uploads/2022/03/5-Must-Have-Diamond-Jewellery-Pieces-You-Cant-Ignore.jpg" // Jewelry
  },
  {
    id: 3,
    title: "Mother's Day Flowers",
    price: "$35",
    image: "https://hips.hearstapps.com/hmg-prod/images/mothers-day-flowers-1677167880.jpg" // Flowers
  },
  {
    id: 4,
    title: "Handwritten Letters Kit",
    price: "$25",
    image: "https://static.wixstatic.com/media/2f5491_5e21ab857e8a41b1a22abe4291d75b6b~mv2.jpg/v1/fill/w_480,h_640,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2f5491_5e21ab857e8a41b1a22abe4291d75b6b~mv2.jpg" // Letters
  },
  {
    id: 5,
    title: "Cookbook for Moms",
    price: "$30",
    image: "https://www.greenpan.us/cdn/shop/products/NC_CC007381-001-07-1200x1200-bd93c0f.jpg?v=1697557184" // Cookbook
  }
];

const GuideSection = () => {
  return (
    <div className="w-[800px] h-[325px] scale-[0.97] bg-black text-white px-6 py-8 mx-auto my-8">
      <h2 className="text-center text-base font-semibold mb-6 font-serif">
        Thoughtful Mother's Day Gifts to Show You Care 💐
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
