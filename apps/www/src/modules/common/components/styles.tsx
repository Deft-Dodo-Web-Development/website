"use client";
type StylesProps = {
  bisonFont: any;
};

const Styles: React.FC<StylesProps> = ({ bisonFont }) => {
  return (
    <>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${bisonFont.style.fontFamily};
          font-weight: 700;
        }
      `}</style>
    </>
  );
};

export default Styles;
