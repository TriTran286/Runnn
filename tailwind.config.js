export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Thêm tất cả các file trong thư mục src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"], // Đặt "Noto Sans JP" làm font tùy chỉnh
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'mainColor':'#FFFBE6'
      },
    },
  },
  plugins: [],
};
