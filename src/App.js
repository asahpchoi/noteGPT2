import "./styles.css";
import "./styles.css";
import { useWhisper } from "@chengsokdara/use-whisper";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";

export default function App() {
  const apiKey = "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";
  const { recording, transcript, startRecording, stopRecording } = useWhisper({
    apiKey // YOUR_OPEN_AI_TOKEN
  });
  console.log({ recording });
  useEffect(() => {
    console.log(transcript.text);
    //openAICalls(apiKey, transcript.text);
  }, [transcript.text]);

  return (
    <Stack>
      <Button>Config</Button>
      <Button
        variant="contained"
        onClick={() => (recording ? stopRecording() : startRecording())}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </Button>
    </Stack>
  );
}
