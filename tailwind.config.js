/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow":
          "-8.433px -16.867px 50.6px -16.867px #485B71, 13.493px 16.867px 67.467px 8.433px #0A0A0A",
        "custom-shadow-2":
          "-0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25), 9px 10px 7.1px 0px rgba(0, 0, 0, 0.40), 0px 0px 48.906px 0px rgba(255, 255, 255, 0.05) inset, 0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15) inset",
        "custom-hover":
          "12px 13px 39.2px 9.15px rgba(10, 10, 10, 0.62), -9.15px -18.5px 54.89px -142px #617892",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
      },
      minWidth: {
        50: "50%",
      },
      backdropBlur: {
        "custom-blur": "52.27996826171875px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".custom-horizontal-line": {
          borderRadius: "2.459px",
          background:
            "var(--light-glass-fill-10-neutral, linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(180deg, rgba(40, 40, 40, 0.10) 0%, rgba(248, 248, 248, 0.10) 100%))",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.33)",
          backdropFilter: "blur(4.918659687042236px)",
          width: "80%",
          height: "4px",
          flexShrink: "0",
        },
      });
    },
  ],
};
