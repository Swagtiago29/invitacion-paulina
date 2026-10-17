import React, { useEffect, useState } from 'react';

export default function Gallery({ images = [] }) {
    const [imageSizes, setImageSizes] = useState({});
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;

        const timer = setInterval(() => {
            setActive(prev => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    if (!images.length) return null;

    const getSrc = image =>
        typeof image === 'string' ? image : image.src;

    const getAlt = image =>
        typeof image === 'string'
            ? 'Recuerdo especial'
            : image.alt || 'Recuerdo especial';

    const goTo = index => {
        setActive((index + images.length) % images.length);
    };

    const getOffset = index => {
        let offset = index - active;
        const length = images.length;

        if (offset > length / 2) offset -= length;
        if (offset < -length / 2) offset += length;

        return offset;
    };

    return (
        <section style={styles.section}>
            <p style={styles.eyebrow}>MOMENTOS INOLVIDABLES</p>
            <h2 style={styles.title}>Mis recuerdos</h2>
            <p style={styles.subtitle}>
                Pequeños instantes, grandes recuerdos ♡
            </p>

            <div style={styles.stage}>
                {images.map((image, index) => {
                    const offset = getOffset(index);
                    const distance = Math.abs(offset);
                    const visible = distance <= 2;
                    const size = imageSizes[index];
                    const aspectRatio = size
                        ? size.width / size.height
                        : 4 / 3;

                    const cardWidth = Math.min(
                        560,
                        Math.max(240, 400 * aspectRatio)
                    );
                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={() => goTo(index)}
                            style={{
                                ...styles.card,
                                width: `min(75vw, ${cardWidth}px)`,
                                height: 'auto',
                                zIndex: 10 - distance,
                                zIndex: 10 - distance,
                                opacity: visible
                                    ? distance === 2 ? 0.48 : 1
                                    : 0,
                                pointerEvents: visible ? 'auto' : 'none',
                                transform: `
                translateX(${offset * 62}%)
                translateZ(${-distance * 95}px)
                rotateY(${offset * -22}deg)
                scale(${1 - distance * 0.13})
            `,
                            }}
                        >
                            <img
                                src={getSrc(image)}
                                alt={getAlt(image)}
                                onLoad={event => {
                                    const { naturalWidth, naturalHeight } = event.currentTarget;

                                    setImageSizes(prev => ({
                                        ...prev,
                                        [index]: {
                                            width: naturalWidth,
                                            height: naturalHeight,
                                        },
                                    }));
                                }}
                                style={styles.image}
                            />

                            <span style={styles.cardCaption}>
                            </span>
                        </button>
                    );

                })}
            </div>

            <div style={styles.controls}>
                <button
                    type="button"
                    style={styles.arrow}
                    onClick={() => goTo(active - 1)}
                    aria-label="Anterior"
                >
                    ←
                </button>

                <div style={styles.dots}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => goTo(index)}
                            aria-label={`Ir a la foto ${index + 1}`}
                            style={{
                                ...styles.dot,
                                ...(index === active
                                    ? styles.activeDot
                                    : {}),
                            }}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    style={styles.arrow}
                    onClick={() => goTo(active + 1)}
                    aria-label="Siguiente"
                >
                    →
                </button>
            </div>

            <p style={styles.counter}>
                {String(active + 1).padStart(2, '0')}
                {' / '}
                {String(images.length).padStart(2, '0')}
            </p>
        </section>
    );
}

const styles = {
    section: {
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '45px 10px 35px',
        boxSizing: 'border-box',
        textAlign: 'center',
        color: '#344F6B',
        fontFamily: '"Cormorant Garamond", serif',
        overflow: 'hidden',
        backgroundColor: '#e8f2fa83',
    },

    eyebrow: {
        fontFamily: 'sans-serif',
        fontSize: '10px',
        letterSpacing: '4px',
        color: '#829DB7',
        margin: '0 0 8px',
    },

    title: {
        fontSize: 'clamp(36px, 6vw, 52px)',
        fontWeight: 500,
        margin: '0',
        color: '#344F6B'
    },

    subtitle: {
        fontSize: '19px',
        fontStyle: 'italic',
        color: '#7C96B0',
        margin: '5px 0 0',
    },
    stage: {
        position: 'relative',
        width: '100%',
        maxWidth: '900px',
        height: 'clamp(360px, 75vw, 600px)',
        margin: '20px auto 0',
        perspective: '1200px',
        transformStyle: 'preserve-3d',
    },

    card: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '8px',
        boxSizing: 'border-box',
        border: '1px solid rgba(255,255,255,0.95)',
        borderRadius: '8px',
        background: 'rgba(255,255,255,0.96)',
        boxShadow: '0 15px 35px rgba(52,79,107,0.22)',
        cursor: 'pointer',
        transformOrigin: 'center center',
        transition: 'transform 0.8s ease, opacity 0.8s ease',
        translate: '-50% -50%',
    },

    image: {
        display: 'block',
        width: '100%',
        height: 'auto',
        objectFit: 'contain',
        borderRadius: '4px',
        background: '#E8F2FA',
    },

    controls: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '22px',
        marginTop: '4px',
    },

    arrow: {
        width: '38px',
        height: '38px',
        border: '1px solid #C7D9E8',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.75)',
        color: '#526F8C',
        fontSize: '18px',
        cursor: 'pointer',
    },

    dots: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
    },

    dot: {
        width: '7px',
        height: '7px',
        border: 'none',
        borderRadius: '50%',
        background: '#C7D9E8',
        padding: 0,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },

    activeDot: {
        width: '22px',
        borderRadius: '10px',
        background: '#526F8C',
    },

    counter: {
        margin: '12px 0 0',
        fontFamily: 'sans-serif',
        fontSize: '10px',
        letterSpacing: '3px',
        color: '#829DB7',
    },
};