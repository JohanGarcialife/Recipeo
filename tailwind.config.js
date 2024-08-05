module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#129575",
        primary2: "#71b1a1",
        primary3: "#afd3ca",
        primary4: "#dbebe7",
        primary5: "#fgfaf9",
        secondary: "#FF9c00",
        secondary2: "#FFa61a",
        secondary3: "#FFba4d",
        secondary4: "#FFce80",
        secondary5: "#FFe1b3",
        rating: "#ffad30",
        warning: "804e00",
        warning2: "995e00",
        success: "#31b057",
        gray: "#484848",
        gray2: "#797979",
        gray3: "#a9a9a9",
        gray4: "#d9d9d9",
      },
      fontFamily: {
        poppins: ["poppins"],
      },
    },
  },
  plugins: [],
};
