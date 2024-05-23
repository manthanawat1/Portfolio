const CustomScrollEvent = (href: string) => {
  const targetElement = document.getElementById(href.substring(1));
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

export default CustomScrollEvent;
