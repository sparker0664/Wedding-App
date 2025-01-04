const images = import.meta.glob("./assets/carousel/*.jpg", { eager: true });

const imagePaths = Object.values(images).map((mod) => mod.default);

export default imagePaths;
