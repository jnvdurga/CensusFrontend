const colors = [
  "#1f78b4", "#33a02c", "#e31a1c", "#ff7f00",
  "#6a3d9a", "#a6cee3", "#b2df8a", "#fb9a99"
];

export function getColor(index) {
  return colors[index % colors.length];
}
