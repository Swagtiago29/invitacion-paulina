import { useState } from 'react';
import pattern from '../../assets/images/pattern.png';
import waxSeal from '../../assets/images/wax_seal.png';
import letterImage from '../../assets/images/bg.png';
import './envelope.css';

function Envelope({ showLetter, setShowLetter, handlePage }) {
    const [open, setOpen] = useState(false);
    const [letterOut, setLetterOut] = useState(false);

    const handleClick = () => {
        if (!open) {
            setOpen(true);

            setTimeout(() => {
                setLetterOut(true);
                setShowLetter(true);
            }, 500);
        } else if (showLetter) {
            if (handlePage) {
                handlePage()
                localStorage.setItem('paulinaInvitationOpened', 'true');
            }
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div
                className={open ? '' : 'envelope-jitter'}
                style={Styles.outside}
                onClick={handleClick}
            >
                <div
                    style={{
                        ...Styles.letterContainer,
                        transform: letterOut
                            ? 'translateY(-45%)'
                            : 'translateY(0)',
                    }}
                >
                    <img
                        src={letterImage}
                        alt="Open invitation"
                        style={Styles.letterImage}
                    />

                    <div style={Styles.invitationText}>
                        <span style={Styles.eyebrow}>UNA NOCHE MÁGICA</span>

                        <h2 style={Styles.name}>Paulina</h2>

                        <div style={Styles.ornament}>
                            <span>✧</span>
                            <span>♡</span>
                            <span>✧</span>
                        </div>

                        <p style={Styles.subtitle}>Mis XV años</p>
                        <p style={Styles.date}>7 · 11 · 2026</p>

                        <span style={Styles.footer}>CON MUCHO AMOR</span>
                    </div>
                </div>
                <div style={Styles.pocket} />

                <div
                    style={{
                        ...Styles.flapBorder,
                        transform: open ? 'rotateX(180deg)' : 'rotateX(0deg)',
                        zIndex: open ? 1 : 4,
                    }}
                >
                    <div style={Styles.flap} />
                    <img
                        src={waxSeal}
                        alt="Wax Seal"
                        style={Styles.waxSeal}
                    />
                </div>
            </div>
        </div>
    );
}

export default Envelope;

const Styles = {
    outside: {
        width: 'min(500px, 90vw)',
        aspectRatio: '500 / 350',
        backgroundColor: '#fefbf2',
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '700px 466px',
        position: 'relative',
        perspective: '1000px',
        borderRadius: '8px',
        cursor: 'pointer',
        border: '2px solid #86afce7e',
        filter: 'drop-shadow(4px 4px 5px gray)',
        overflow: 'visible',
        zIndex: 2,
    },
    letterImage: {
        position: 'absolute',
        left: '50%',
        bottom: '10px',
        width: '90%',
        height: '90%',
        objectFit: 'cover',
        borderRadius: '6px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.15)',
        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 2,
    },
    pocket: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '700px 466px',
        clipPath: 'polygon(0 100%, 0 0, 50% 50%, 100% 0, 100% 100%)',
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 3, // Sits over the lower part of the letter
    },
    flapBorder: {
        width: '100%',
        height: '55%',
        position: 'absolute',
        top: 0,
        left: 0,
        transformOrigin: 'top center',
        transition: 'transform 0.8s ease, z-index 0.8s ease',
        filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))',
    },
    flap: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#fefdf5',
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '700px 466px',
        clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
    },
    waxSeal: {
        position: 'absolute',
        width: 'clamp(45px, 12vw, 80px)',
        height: 'clamp(45px, 12vw, 80px)',
        objectFit: 'contain',
        left: '50%',
        bottom: '-10px',
        transform: 'translateX(-50%)',
    },

    letterContainer: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    },

    invitationText: {
        position: 'absolute',
        zIndex: 999,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        textAlign: 'center',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textShadow: '0 2px 12px rgba(15, 25, 45, 0.25)',
    },

    eyebrow: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(9px, 2vw, 13px)',
        letterSpacing: '4px',
        marginBottom: '8px',
    },

    name: {
        fontFamily: "'Great Vibes', cursive",
        fontSize: 'clamp(52px, 12vw, 88px)',
        fontWeight: '400',
        lineHeight: 1.2,
        margin: '0',
        color: 'white'
    },

    ornament: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '18px',
        fontSize: '17px',
        margin: '8px 0',
        color: '#DCEBFA',
    },

    subtitle: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(21px, 5vw, 32px)',
        fontStyle: 'italic',
        letterSpacing: '2px',
        margin: '0 0 12px',
    },

    date: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(13px, 3vw, 18px)',
        letterSpacing: '5px',
        margin: '0',
    },

    footer: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '10px',
        letterSpacing: '3px',
        marginTop: '28px',
    },

    letterContainer: {
        position: 'absolute',
        left: '5%',
        bottom: '10px',
        width: '90%',
        height: '90%',
        zIndex: 2,
        transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
    },

    letterImage: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '6px',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.15)',
    },

    invitationText: {
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: '12px',
        textAlign: 'center',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '0 2px 12px rgba(15, 25, 45, 0.3)',
    },
};