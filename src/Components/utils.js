const NUM_POINTS = 2500;
const MAX_RADIUS = 20;
const MIN_RADIUS = 5;
const DEPTH = 5;

const calculateColor = () => {
  return "#ffffff"; // Devuelve el color blanco
};

const randomFromInterval = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const pointsInner = Array.from({ length: NUM_POINTS }, (v, k) => k + 1).map(
  (num) => {
    const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
    const randomAngle = Math.random() * Math.PI * 2;

    const x = Math.cos(randomAngle) * randomRadius;
    const y = Math.sin(randomAngle) * randomRadius;
    const z = randomFromInterval(-DEPTH, DEPTH);

    const color = calculateColor();

    return {
      idx: num,
      position: [x, y, z],
      color,
    };
  }
);

export const pointsOuter = Array.from({ length: NUM_POINTS / 4 }, (v, k) => k + 1).map(
  (num) => {
    const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2);
    const angle = Math.random() * Math.PI * 2;

    const x = Math.cos(angle) * randomRadius;
    const y = Math.sin(angle) * randomRadius;
    const z = randomFromInterval(-DEPTH * 10, DEPTH * 10);

    const color = calculateColor();

    return {
      idx: num,
      position: [x, y, z],
      color,
    };
  }
);
