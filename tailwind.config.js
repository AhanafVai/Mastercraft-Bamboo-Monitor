module.exports = {
  content: ["./*{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Commissioner:"'Commissioner', sans-serif",
      },
            backgroundImage: {
        'desktop-hero': "url('/images/image-hero-desktop.jpg')",
        'mobile-hero': "url('/images/image-hero-mobile.jpg')",
        
      },

      colors: {
        moderateCyan: "hsl(176, 50%, 47%)",
       darkCyan: "hsl(176, 72%, 28%)",
        blackFM: "hsl(0, 0%, 0%)",
        darkGray: "hsl(0, 0%, 48%)",
       
      },
    },
  },
  plugins: [],
};