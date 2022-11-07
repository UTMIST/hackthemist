export const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView();
}