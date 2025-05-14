import React, { useEffect } from 'react';

const VoiceInput = ({ onCommand }) => {
  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim();
      onCommand(transcript);
    };

    recognition.start();
    return () => recognition.stop();
  }, [onCommand]);

  return <div>🎤 Voice command listening...</div>;
};

export default VoiceInput;
