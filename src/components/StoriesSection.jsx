import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroimage from '../assets/5.jpeg'; // Đường dẫn hình ảnh

function StoriesSection() {
  return (
    <section className="flex flex-col md:flex-row gap-10 items-center justify-center px-4 md:px-16 py-16 bg-gray-100 min-h-screen">
      {/* Phần Văn Bản */}
      <div className="flex flex-col items-center w-full md:w-1/2 space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ランニングマラソンへようこそ
        </h2>
        <InViewSection title="意志" delay={0} text="ランニングにおいて意志の力は非常に重要です。困難な状況でも自分を奮い立たせ、目標に向かって努力し続けるための原動力となります。強い意志があれば、長距離の挑戦でも成し遂げることができます。" />
        <InViewSection title="スピード" delay={0.2} text="スピードはランナーのパフォーマンスを高める重要な要素です。効果的なスピードトレーニングにより、スタミナを保ちながらペースを上げることが可能です。適切なスピード管理は記録更新にも繋がります。" />
        <InViewSection title="技術" delay={0.4} text="正しいテクニックはランニングを安全で効率的にします。適切な姿勢や足の使い方により、怪我を防ぎ、エネルギーを節約できます。テクニックを磨くことで、より快適にランニングを楽しむことができます。" />
        
        {/* Nút About */}
        <motion.button
          className="w-24 px-4 py-2 mt-8 border border-gray-400 text-gray-600 font-semibold rounded-full hover:bg-gray-100 transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          About
        </motion.button>
      </div>

      {/* Phần Hình Ảnh */}
      <motion.div
        className="w-full md:w-1/2 h-80 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img src={heroimage} alt="Running Illustration" className="w-full h-full object-cover rounded-lg shadow-lg" />
      </motion.div>
    </section>
  );
}

// Component phụ để tạo animation khi vào tầm nhìn
function InViewSection({ title, delay, text }) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Kích hoạt khi 50% vào tầm nhìn
    triggerOnce: false, // Cho phép tái kích hoạt
  });

  return (
    <motion.div
      ref={ref}
      className="max-w-3xl mb-8"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h3>
      <p className="text-lg text-gray-700">{text}</p>
    </motion.div>
  );
}

export default StoriesSection;
