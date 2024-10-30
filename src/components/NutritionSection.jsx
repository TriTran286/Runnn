import React from 'react';
import { motion } from 'framer-motion';
import foodExample from '../assets/Protein.jpeg';

function NutritionSection() {
  // Dữ liệu cho các hình ảnh và link chi tiết
  const nutritionItems = [
    {
      image: foodExample,
      link: "https://example.com/food1",
      description: "タンパク質が豊富な食品",
    },
    {
      image: foodExample,
      link: "https://example.com/food2",
      description: "新鮮な野菜と果物",
    },
    {
      image: foodExample,
      link: "https://example.com/food3",
      description: "ミネラル補給の飲み物",
    },
    {
      image: foodExample,
      link: "https://example.com/food4",
      description: "バランスの取れた食事",
    },
    {
      image: foodExample,
      link: "https://example.com/food5",
      description: "健康的なスナック",
    },
  ];

  // Animation variants cho các phần tử
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-4 py-16 bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto text-center">
        {/* Tiêu đề chính */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          ランニングと減量のための栄養
        </h2>

        {/* Nội dung về tầm quan trọng của dinh dưỡng */}
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          栄養バランスの取れた食事は、ランニングやトレーニングにおいて非常に重要です。適切な食事は、エネルギーを供給し、筋肉の回復を促進します。炭水化物は持久力を維持するエネルギー源であり、タンパク質は筋肉の修復と成長をサポートします。また、十分な水分とミネラルの補給は、体の機能を維持し、疲労を軽減し、ケガの予防にも役立ちます。適切な栄養摂取は、トレーニングの成果を向上させ、全体的な健康を最適化します。
        </p>

        {/* Danh sách ngang các phần tử */}
        <div className="flex overflow-x-scroll space-x-6 scrollbar-hide">
          {nutritionItems.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] flex-shrink-0 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.description}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <p className="text-gray-600">{item.description}</p>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Nút もっと見る */}
        <motion.button
          className="mt-8 px-6 py-2 text-sm font-semibold border border-gray-400 rounded-full bg-[#059212] text-white hover:bg-black hover:text-[#059212] focus:outline-none transition duration-300"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
        >
          もっと見る
        </motion.button>
      </div>
    </section>
  );
}

export default NutritionSection;
