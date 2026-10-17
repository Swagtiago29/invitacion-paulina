import { useState } from 'react'
import './App.css'
import Envelope from './envelope/envelope'
import Invite from './invite/Invite'

function App() {
    const wasOpened =
        localStorage.getItem('paulinaInvitationOpened') === 'true';

    const [showLetter, setShowLetter] = useState(wasOpened);
    const [showEnvelope, setShowEnvelope] = useState(!wasOpened);
    const [showPage, setShowPage] = useState(wasOpened);

    const handlePage = () => {
        setShowPage(true);
        setShowEnvelope(false);
    };

    return (
        <div style={Styles.page} className="a">
            {showEnvelope && (
                <Envelope
                    showLetter={showLetter}
                    setShowLetter={setShowLetter}
                    handlePage={handlePage}
                />
            )}

            {showPage && <Invite />}
        </div>
    );
}

export default App;

const Styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};