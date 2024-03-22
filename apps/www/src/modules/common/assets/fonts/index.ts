import localFont from 'next/font/local';

const bisonFont = localFont({
    src: [
        {
            path: "./Bison-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./Bison-RegularItalic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "./Bison-Bold.ttf",
            weight: "700",
            style: "normal",
        }
    ]
});

export {
    bisonFont
}