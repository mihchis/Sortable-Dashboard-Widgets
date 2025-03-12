// Khởi tạo sortable cho tất cả các phần tử .indicator trong .indicators
const indicatorsContainer = document.querySelector(".indicators");

new Sortable(indicatorsContainer, {
  animation: 150,
  handle: '.indicator', // Kéo và thả từ phần tử indicator
  swapThreshold: 0.5, // Ngưỡng khi hoán đổi
  group: {
    name: 'widgets', // Cùng nhóm để có thể kéo thả giữa các phần tử
    pull: true,
    put: true
  },
  chosenClass: 'sortable-chosen', // Hiệu ứng khi widget được chọn
  dragClass: 'sortable-drag', // Hiệu ứng khi widget đang kéo
});
