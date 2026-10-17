import Image2 from '../../assets/images/60de235.jpg';
import MusicPlayer from './musicplayer/MusicPlayer';
import Countdown from './Countdown/Countdown';
import Gallery from './galery/Gallery';
import foto from '../../assets/images/foto.jpg'
import foto1 from '../../assets/images/foto1.jpg'
import foto2 from '../../assets/images/foto2.jpg'
import foto3 from '../../assets/images/foto3.jpg'
import foto4 from '../../assets/images/foto4.jpg'
import foto5 from '../../assets/images/foto5.jpg'
import foto6 from '../../assets/images/foto6.jpg'
import foto7 from '../../assets/images/foto7.jpg'
import foto8 from '../../assets/images/foto8.jpg'
import foto9 from '../../assets/images/foto9.jpg'
import foto10 from '../../assets/images/foto10.jpg'
import foto11 from '../../assets/images/foto11.jpg'
import foto12 from '../../assets/images/foto12.jpg'
import foto13 from '../../assets/images/foto13.jpg'
import foto14 from '../../assets/images/foto14.jpg'
import butterflyBackground from '../../assets/images/butterflies.png';

function Invite() {
    return (
        <div style={styles.page}>

            {/* IMAGEN PRINCIPAL */}
            <div style={styles.hero}>
                <MusicPlayer />

                <img
                    src={Image2}
                    alt="Invitación de los XV de Paulina"
                    style={styles.heroImage}
                />

                <div style={styles.heroGradient} />

                <h1 style={styles.heroTitle}>
                    Paulina
                </h1>

                <p style={styles.heroSubtitle}>
                    Mis XV
                </p>
            </div>

            {/* MENSAJE Y FECHA */}
            <section style={styles.intro}>
                <div style={styles.ornament}>
                    ✧
                </div>

                <p style={styles.quote}>
                    “Hoy comienza un capítulo muy especial,
                    lleno de sueños, ilusiones y nuevos
                    recuerdos por crear.”
                </p>

                <div style={styles.divider}>
                    <span style={styles.dividerLine} />
                    <span style={styles.diamond}>◆</span>
                    <span style={styles.dividerLine} />
                </div>

                <p style={styles.invitationText}>
                    Te invito a ser parte de
                    <br />
                    una noche mágica...
                </p>

                <div style={styles.eventDate}>
                    <span style={styles.dateNumber}>
                        07.11.2026
                    </span>

                    <span style={styles.dateTime}>
                        21:30 hs
                    </span>
                </div>
            </section>

            {/* CUENTA REGRESIVA */}
            <Countdown />

            {/* DETALLES DEL EVENTO */}
            <section style={styles.details}>

                <p style={styles.eyebrow}>
                    DETALLES DEL EVENTO
                </p>

                {/* LUGAR */}
                <h2 style={styles.sectionTitle}>
                    Lugar
                </h2>

                <div style={styles.divider}>
                    <span style={styles.dividerLine} />
                    <span style={styles.diamond}>◆</span>
                    <span style={styles.dividerLine} />
                </div>

                <div style={styles.locationCard}>
                    <p style={styles.venueName}>
                        Sociedad Criolla
                    </p>

                    <p style={styles.address}>
                        Elias Regules, 75000 Mercedes,
                        <br />
                        Departamento de Soriano
                    </p>

                    <button
                        onClick={() => window.open(
                            'https://www.google.com/maps/search/?api=1&query=Sociedad+Criolla+de+Mercedes',
                            '_blank',
                            'noopener,noreferrer'
                        )}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                                '#E8F2FA';
                            e.currentTarget.style.color =
                                '#344F6B';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                                '#344F6B';
                            e.currentTarget.style.color =
                                '#E8F2FA';
                        }}
                        style={styles.Button}
                    >
                        Ver ubicación
                    </button>
                </div>

                {/* VESTIMENTA */}
                <div style={styles.dressCode}>
                    <div style={styles.ornament}>
                        ✧
                    </div>

                    <h2 style={styles.sectionTitle}>
                        Vestimenta
                    </h2>

                    <p style={styles.dressCodeText}>
                        Formal
                    </p>
                </div>

                {/* COLORES RESERVADOS */}
                <div style={styles.reservedColors}>
                    <h3 style={styles.colorsTitle}>
                        Colores reservados
                    </h3>

                    <p style={styles.colorsDescription}>
                        Agradezco que eviten estos colores
                    </p>

                    <div style={styles.colorList}>
                        <div style={styles.colorItem}>
                            <span
                                style={{
                                    ...styles.colorSwatch,
                                    backgroundColor: '#8BB9E8',
                                }}
                            />
                            <span style={styles.colorLabel}>
                                Azul
                            </span>
                        </div>

                        <div style={styles.colorItem}>
                            <span
                                style={{
                                    ...styles.colorSwatch,
                                    backgroundColor: '#E9AFC5',
                                }}
                            />
                            <span style={styles.colorLabel}>
                                Rosa
                            </span>
                        </div>
                    </div>
                </div>

                <div style={styles.bottomOrnament}>
                    ✧
                </div>
            </section>

            <section style={styles.confirmAttendance}>
                <h2 style={styles.darksectionTitle}>
                    Confirmar asistencia
                </h2>

                <div style={styles.darkdivider}>
                    <span style={styles.darkdividerLine} />
                    <span style={styles.darkdiamond}>◆</span>
                    <span style={styles.darkdividerLine} />
                </div>

                <p style={{ ...styles.quote, color: '#E8F2FA', fontWeight: 300 }}>
                    ¡Tu presencia es muy importante para mí! Te pido que
                    confirmes tu asistencia con anticipación para que podamos
                    compartir juntos una noche llena de alegría!
                </p>

                <button
                    style={styles.DarkButton}
                    onClick={() =>
                        window.open('https://forms.gle/VQ6fKMKyHADUSqv76')
                    }
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#E8F2FA';
                        e.currentTarget.style.color = '#344F6B';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#344F6B';
                        e.currentTarget.style.color = '#E8F2FA';
                    }}
                >
                    Confirmar
                </button>
            </section>
            <section style={styles.giftsSection}>
                <div style={styles.ornament}>✧</div>

                <h2 style={styles.sectionTitle}>Regalos</h2>

                <div style={styles.giftsDivider}>
                    <span style={styles.giftsLine} />
                    <span>◆</span>
                    <span style={styles.giftsLine} />
                </div>

                <p style={styles.giftsText}>
                    Si deseas acompañarme en este día con un regalo,
                    puedes hacerlo mediante una transferencia.
                    ¡Muchas gracias!
                </p>

                <div style={styles.prexCard}>
                    <p style={styles.prexLabel}>BANCO</p>
                    <h3 style={styles.prexTitle}>Prex</h3>

                    <div style={styles.prexDivider} />

                    <p style={styles.prexDetailLabel}>Número</p>
                    <p style={styles.prexNumber}>240177</p>

                    <p style={styles.prexDetailLabel}>Titular</p>
                    <p style={styles.prexName}>Karina Fontora</p>
                </div>

                <p style={styles.giftsClosing}>
                    Gracias por ser parte de este momento tan especial ♡
                </p>
            </section>

            <Gallery images={[foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9,
                foto10, foto11, foto12, foto13, foto14
            ]} />

            <section style={styles.finalSection}>
                <div style={styles.ornament}>✧</div>

                <p style={styles.finalText}>Con mucho cariño,</p>

                <h2 style={styles.finalName}>¡Te esperamos!</h2>

                <div style={styles.finalDivider}>
                    <span style={styles.giftsLine} />
                    <span>♡</span>
                    <span style={styles.giftsLine} />
                </div>

                <p style={styles.finalDate}>PAULINA · MIS 15 AÑOS</p>

                <button style={styles.Button}
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}>
                    Abrir invitacion otra vez
                </button>
            </section>
            <footer style={styles.footer}>
                <span style={styles.footerText}>
                    Hecho con ♡ por tu primo Santiago
                </span>

                <a
                    href="https://wa.me/59898634619"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.footerLink}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9a11.82 11.82 0 0 0-3.42-8.43ZM12.04 21.8a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.23-.37a9.85 9.85 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.9-9.9a9.84 9.84 0 0 1 7.01 2.9 9.84 9.84 0 0 1 2.9 7.01c0 5.46-4.44 9.9-9.9 9.9Zm5.43-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                    </svg>

                    <span>Por Contrataciones</span>
                </a>

                <span style={styles.footerCopyright}>
                    © {new Date().getFullYear()} · Todos los derechos reservados
                </span>
            </footer>
        </div>
    );
}

const styles = {
    // PÁGINA
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        backgroundImage: `url(${butterflyBackground})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '420px auto',
        backgroundPosition: 'center top',

        boxSizing: 'border-box',
    },

    // IMAGEN PRINCIPAL
    hero: {
        width: '100%',
        maxWidth: '900px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
    },

    heroImage: {
        width: '100%',
        height: 'auto',
        maxHeight: '100vh',
        objectFit: 'contain',
        display: 'block',
    },

    heroGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxWidth: '607px',
        height: '150px',
        margin: '0 auto',
        background: 'linear-gradient(to top, rgba(47, 103, 158, 0.65), transparent)',
        zIndex: 1,
        pointerEvents: 'none',
    },

    heroTitle: {
        position: 'absolute',
        left: '50%',
        bottom: '10%',
        margin: 0,
        fontSize: '100px',
        fontFamily: "'Great Vibes', cursive",
        fontWeight: 400,
        color: '#FFFFFF',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        whiteSpace: 'nowrap',
    },

    heroSubtitle: {
        position: 'absolute',
        left: '68%',
        bottom: '6%',
        margin: 0,
        fontSize: '20px',
        color: '#FFFFFF',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        zIndex: 2,
    },

    // MENSAJE Y FECHA
    intro: {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: 'clamp(28px, 6vw, 55px) 20px',
        boxSizing: 'border-box',
        backgroundColor: '#e8f2fa83',
        color: '#344F6B',
        textAlign: 'center',
        fontFamily: "'Cormorant Garamond', serif",
    },

    ornament: {
        fontSize: '30px',
        marginBottom: '18px',
    },

    quote: {
        maxWidth: '650px',
        margin: '0 auto',
        fontSize: 'clamp(20px, 3.5vw, 28px)',
        lineHeight: 1.5,
        fontStyle: 'italic',
        fontWeight: 500,
    },

    divider: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        maxWidth: '180px',
        margin: '24px auto',
    },

    dividerLine: {
        flex: 1,
        height: '1px',
        backgroundColor: 'rgba(52, 79, 107, 0.4)',
    },

    diamond: {
        fontSize: '10px',
    },

    invitationText: {
        margin: 0,
        fontSize: 'clamp(22px, 4vw, 32px)',
        lineHeight: 1.4,
        fontWeight: 500,
    },

    eventDate: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        maxWidth: '430px',
        margin: '30px auto 0',
        padding: '22px 10px',
        borderTop: '1px solid rgba(52, 79, 107, 0.4)',
        borderBottom: '1px solid rgba(52, 79, 107, 0.4)',
    },

    dateNumber: {
        fontSize: 'clamp(38px, 8vw, 65px)',
        fontWeight: 500,
        lineHeight: 1.1,
        fontVariantNumeric: 'tabular-nums',
    },

    dateTime: {
        fontSize: 'clamp(27px, 5vw, 40px)',
        fontWeight: 600,
        lineHeight: 1,
    },

    // DETALLES DEL EVENTO
    details: {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: 'clamp(30px, 6vw, 55px) 20px',
        boxSizing: 'border-box',
        color: '#344F6B',
        textAlign: 'center',
        fontFamily: "'Cormorant Garamond', serif",
        backgroundColor: '#e8f2fa83',
    },

    eyebrow: {
        margin: '0 0 10px',
        fontSize: '13px',
        letterSpacing: '4px',
    },

    sectionTitle: {
        margin: 0,
        fontSize: 'clamp(38px, 7vw, 50px)',
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#344F6B',
    },

    darksectionTitle: {
        margin: 0,
        fontSize: 'clamp(38px, 7vw, 50px)',
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#E8F2FA',
    },

    // UBICACIÓN
    locationCard: {
        maxWidth: '550px',
        margin: '0 auto',
        padding: 'clamp(18px, 4vw, 30px) 15px',
        boxSizing: 'border-box',
    },

    venueName: {
        margin: 0,
        fontSize: 'clamp(27px, 5vw, 38px)',
        fontWeight: 600,
        lineHeight: 1.25,
    },

    address: {
        margin: '14px 0 0',
        fontSize: 'clamp(16px, 3vw, 20px)',
        lineHeight: 1.6,
    },

    Button: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '24px',
        padding: '12px 28px',
        backgroundColor: '#344F6B',
        color: '#E8F2FA',
        border: '1px solid #344F6B',
        borderRadius: '10px',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '20px',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
    },

    // VESTIMENTA
    dressCode: {
        marginTop: 'clamp(40px, 8vw, 65px)',
    },

    dressCodeText: {
        margin: '12px 0 0',
        fontSize: 'clamp(22px, 4vw, 28px)',
        fontStyle: 'italic',
    },

    // COLORES RESERVADOS
    reservedColors: {
        marginTop: 'clamp(35px, 7vw, 50px)',
        padding: '25px 10px 5px',
        borderTop: '1px solid rgba(52, 79, 107, 0.25)',
    },

    colorsTitle: {
        margin: 0,
        fontSize: 'clamp(27px, 5vw, 36px)',
        fontWeight: 500,
    },

    colorsDescription: {
        margin: '10px 0 20px',
        fontSize: '19px',
        lineHeight: 1.5,
    },

    colorList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '25px',
        flexWrap: 'wrap',
    },

    colorItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
    },

    colorSwatch: {
        display: 'block',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: '1px solid rgba(52, 79, 107, 0.2)',
    },

    colorLabel: {
        fontSize: '16px',
    },

    bottomOrnament: {
        marginTop: '35px',
        fontSize: '22px',
    },

    // CONFIRMAR ASISTENCIA
    confirmAttendance: {
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '50px 20px',
        boxSizing: 'border-box',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: '#344F6B',
    },

    DarkButton: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '24px',
        padding: '12px 28px',
        backgroundColor: '#e8f2fa',
        color: '#344F6B',
        border: '1px solid #e8f2fa',
        borderRadius: '10px',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '20px',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
    },

    darkdivider: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        width: '100%',
        maxWidth: '300px',
        margin: '10px auto',
        color: '#FFFFFF',
    },

    darkdividerLine: {
        display: 'block',
        flex: 1,
        height: '1px',
        backgroundColor: '#FFFFFF',
    },

    darkdiamond: {
        color: '#FFFFFF',
        fontSize: '12px',
        lineHeight: 1,
    },

    giftsSection: {
        width: '100%',
        maxWidth: '900px',
        boxSizing: 'border-box',
        margin: '0 auto',
        padding: '65px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '22px',
        color: '#344F6B',
        backgroundColor: '#e8f2fa83',
    },

    giftsTitle: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(32px, 5vw, 46px)',
        fontWeight: 400,
        margin: 0,
        color: '#344F6B',
    },

    giftsDivider: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        width: '100%',
        maxWidth: '260px',
        color: '#344F6B',
        fontSize: '12px',
    },

    giftsLine: {
        display: 'block',
        height: '1px',
        flex: 1,
        backgroundColor: '#344F6B',
        opacity: 0.7,
    },

    giftsText: {
        maxWidth: '520px',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '20px',
        lineHeight: 1.7,
        fontWeight: 300,
        margin: 0,
        color: '#344F6B',
    },

    prexCard: {
        width: '100%',
        maxWidth: '360px',
        boxSizing: 'border-box',
        padding: '30px 24px',
        border: '1px solid rgba(232, 242, 250, 0.65)',
        borderRadius: '4px',
        backgroundColor: '#344F6B',
        boxShadow: '0 8px 24px rgba(3, 3, 3, 0.12)',
        textAlign: 'center',
    },

    prexLabel: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '12px',
        letterSpacing: '4px',
        margin: '0 0 8px',
        color: '#C9D9E8',
    },

    prexTitle: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '42px',
        fontWeight: 500,
        margin: 0,
        color: '#FFFFFF',
    },

    prexDivider: {
        width: '45px',
        height: '1px',
        margin: '18px auto',
        backgroundColor: '#E8F2FA',
        opacity: 0.7,
    },

    prexDetailLabel: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '15px',
        letterSpacing: '1px',
        margin: '16px 0 4px',
        color: '#C9D9E8',
    },

    prexNumber: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '30px',
        letterSpacing: '3px',
        margin: 0,
        color: '#FFFFFF',
    },

    prexName: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '22px',
        margin: 0,
        color: '#FFFFFF',
    },

    giftsClosing: {
        maxWidth: '440px',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '17px',
        fontStyle: 'italic',
        lineHeight: 1.6,
        margin: '8px 0 0',
        color: '#344F6B',
    },

    finalSection: {
        width: '100%',
        maxWidth: '900px',
        boxSizing: 'border-box',
        margin: '0 auto',
        padding: '65px 20px 75px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '18px',
        backgroundColor: '#e8f2fa83',
        color: '#344F6B',
    },

    finalText: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '22px',
        fontStyle: 'italic',
        margin: 0,
        color: '#344F6B',
    },

    finalName: {
        fontFamily: "'Great Vibes', cursive",
        fontSize: 'clamp(58px, 12vw, 100px)',
        fontWeight: 400,
        lineHeight: 1.2,
        margin: '10px 0',
        color: '#344F6B',
    },

    finalDivider: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        width: '100%',
        maxWidth: '220px',
        color: '#344F6B',
        fontSize: '17px',
    },

    finalDate: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '20px',
        letterSpacing: '4px',
        margin: '12px 0 0',
        color: '#344F6B',
    },
    footer: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '16px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: '#344F6B',
        color: '#E8F2FA',
        textAlign: 'center',
    },

    footerText: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '15px',
        opacity: 0.85,
    },

    footerLink: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        color: '#E8F2FA',
        textDecoration: 'none',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '17px',
        transition: 'opacity 0.2s ease',
    },

    footerCopyright: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '12px',
        opacity: 0.65,
    },

};

export default Invite;