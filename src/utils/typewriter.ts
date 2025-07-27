export const typeWriter = (element: HTMLElement, text: string, speed = 120) => {
  element.innerHTML = '';
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};
