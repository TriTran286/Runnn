import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaBrain, FaLeaf } from 'react-icons/fa'; // アイコンを利用する

function BenefitsSection() {
  // Variants cho animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-4 py-16 bg-white text-gray-800 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto text-center">
        {/* メインタイトル */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          ランニングのメリット
        </h2>

        {/* グリッドレイアウトのメリット */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* メリット 1 */}
          <motion.div
            className="flex flex-col items-center p-6 border rounded-lg shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} // Chạy lại khi cuộn vào tầm nhìn
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FaHeart className="text-red-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">心臓の健康を改善</h3>
            <p className="text-gray-600 text-center">
              ランニングは心臓の健康を強化し、血液循環を改善し、心臓病のリスクを低減します。
            </p>
          </motion.div>

          {/* メリット 2 */}
          <motion.div
            className="flex flex-col items-center p-6 border rounded-lg shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <FaBrain className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">メンタルヘルスの向上</h3>
            <p className="text-gray-600 text-center">
              ランニングはストレスを軽減し、気分を向上させ、うつ病や不安の症状を減らす効果があります。
            </p>
          </motion.div>

          {/* メリット 3 */}
          <motion.div
            className="flex flex-col items-center p-6 border rounded-lg shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <FaLeaf className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">減量と体力向上</h3>
            <p className="text-gray-600 text-center">
              ランニングはカロリーを効率的に燃焼し、体重管理と体力向上をサポートします。
            </p>
          </motion.div>
        </div>

        {/* もっと見 ボタン */}
        <motion.button
          className="px-6 py-2 text-sm font-semibold text-gray-600 border border-gray-400 rounded-full bg-[#059212] text-white hover:bg-black hover:text-[#059212] focus:outline-none transition duration-300"
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

export default BenefitsSection;
