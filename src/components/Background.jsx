import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(
        () => ({
            fullScreen: { enable: false },
            background: {
                color: { value: "#020617" }, // This is Tailwind's 'slate-950'
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                    repulse: { distance: 150, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#2dd4bf" }, // This is Tailwind's 'teal-400'
                links: {
                    color: { value: "#67e8f9" }, // This is Tailwind's 'cyan-300'
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                    shadow: {
                        enable: true,
                        blur: 5,
                        color: { value: "#67e8f9" }
                    }
                },
                move: {
                    enable: true,
                    speed: 1,
                },
                number: {
                    density: { enable: true },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                    animation: { enable: true, speed: 1, minimumValue: 0.1 },
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 1, max: 3 },
                    animation: { enable: true, speed: 2, minimumValue: 1 },
                },
                shadow: {
                  enable: true,
                  blur: 10,
                  color: { value: "#2dd4bf" }
                }
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                className="absolute top-0 left-0 w-full h-full"
                style={{ zIndex: -1 }}
            />
        );
    }

    return <></>;
};

export default Background;