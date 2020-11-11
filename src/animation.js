export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, 
      when: 'beforeChildren', 
      staggerChildren: 0.25,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
};

export const skillsAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 0.5,
    }
  }
}