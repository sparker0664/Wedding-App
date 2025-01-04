const images = import.meta.glob("./assets/carousel/*.jpeg", { eager: true });

const imagePaths = Object.values(images).map((mod) => mod.default);

export default imagePaths;
