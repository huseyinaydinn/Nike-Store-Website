const FlexContent = ({
  ifExist,
  endpoint: { title, heading, text, btn, img },
}) => {
  return (
    <>
      <div
        className={`flex items-center justify-between gap-2 text-start lg:text-center lg:flex-col lg:justify-center nike-container ${
          ifExist ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="max-w-lg lg:max-w-none w-full md:text-center justify-center items-center">
          <h1 className="text-4xl sm:text-3xl font-bold text-gradient">
            {heading}
          </h1>
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">
            {title}
          </h1>
          <p className="xl:text-sm my-4 text-slate-900">{text}</p>
          <button
            type="button"
            className="bg-slate-900 shadow-blue-300 text-slate-100 py-1.5 px-4 rounded-xl button-theme"
          >
            {btn}
          </button>
        </div>
        <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full">
          <img
            src={img}
            alt={`img/${heading}`}
            className={`w-auto object-fill transitions-theme  ${
              ifExist
                ? "h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:rotate-12"
                : "h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
