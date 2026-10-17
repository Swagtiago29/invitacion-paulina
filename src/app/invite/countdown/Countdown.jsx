import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-11-07T21:30:00-03:00');

function getTimeLeft() {
    const difference = Math.max(
        0,
        TARGET_DATE.getTime() - Date.now()
    );

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const units = [
        { label: 'DÍAS', value: timeLeft.days },
        { label: 'HORAS', value: timeLeft.hours },
        { label: 'MINUTOS', value: timeLeft.minutes },
        { label: 'SEGUNDOS', value: timeLeft.seconds },
    ];

    return (
        <section style={styles.section}>

            <h2 style={styles.title}>
                ¿Cuánto falta?
            </h2>

            <p style={styles.subtitle}>
                Cada vez falta menos para celebrar juntos
            </p>

            <div style={styles.clock}>
                {units.map((unit) => (
                    <div key={unit.label} style={styles.unit}>
                        <div style={styles.numberBox}>
                            <span style={styles.number}>
                                {String(unit.value).padStart(2, '0')}
                            </span>
                        </div>

                        <span style={styles.label}>
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: {
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '38px 20px 30px',
        backgroundColor: '#344F6B',
        color: '#E8F2FA',
        fontFamily: "'Cormorant Garamond', serif",
        textAlign: 'center',
        borderTop: '1px solid rgba(232, 242, 250, 0.3)',
        borderBottom: '1px solid rgba(232, 242, 250, 0.3)',
    },

    ornament: {
        fontSize: '27px',
        lineHeight: 1,
        color: '#E8F2FA',
        marginBottom: '12px',
    },

    eyebrow: {
        margin: 0,
        fontSize: '12px',
        letterSpacing: '4px',
        fontFamily: 'Georgia, serif',
        opacity: 0.85,
    },

    title: {
        margin: '10px 0 0',
        fontSize: '50px',
        fontWeight: 500,
        lineHeight: 1.15,
        color: '#E8F2FA',
    },

    subtitle: {
        margin: '10px 0 0',
        fontSize: 'clamp(16px, 3vw, 21px)',
        opacity: 0.9,
    },

    divider: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        margin: '24px auto',
        maxWidth: '230px',
    },

    diamond: {
        fontSize: '10px',
    },

    clock: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: 'clamp(6px, 2vw, 16px)',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
    },

    unit: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        minWidth: 0,
    },

    numberBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxHeight: '125px',
    },

    number: {
        fontSize: '50px',
        fontWeight: 500,
        fontVariantNumeric: 'tabular-nums',
        lineHeight: 1,
    },

    label: {
        fontSize: 'clamp(9px, 1.8vw, 13px)',
        letterSpacing: 'clamp(1px, 0.4vw, 3px)',
        fontFamily: 'Georgia, serif',
    },

    footer: {
        margin: '30px 0 0',
        fontSize: '13px',
        letterSpacing: '3px',
    },

    bottomOrnament: {
        marginTop: '18px',
        fontSize: '18px',
    },
};

export default Countdown;