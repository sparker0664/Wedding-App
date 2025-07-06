const images = import.meta.glob("./assets/carousel/*.jpeg", { eager: true });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const imagePaths = Object.values(images).map((mod) => mod.default);

export default imagePaths;
