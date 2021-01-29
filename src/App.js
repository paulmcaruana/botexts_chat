import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID  ="89e82abb-f5f9-4387-94c7-48c28487b3d4"
            userName ="BoTexts"
            userSecret ="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } /> }
            />
    );
}

export default App;