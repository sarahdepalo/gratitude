const options = {
  background: {
    color: {
      value: "#2a2a2a",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
        speed: 1,
      },
      onHover: {
        enable: true,
        mode: "connect",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 800,
        duration: 0,
        opacity: 0.8,
        size: 60,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#bb86fc", "#97f4ff", "#03dac6"],
    },
    links: {
      color: "#2a2a2a",
      distance: 150,
      enable: true,
      opacity: 0,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1.2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 70,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 15,
    },
  },
  detectRetina: true,
};

export default options;
