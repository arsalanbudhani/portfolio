import { useEffect, useRef, useState } from "react";
import { askGemini } from "../lib/gemini";

const greeting = {
  role: "model",
  text: "Hi! I'm Arsalan's AI assistant. Ask me anything about Arsalan's experience, skills or background.",
};

const suggestions = ["What does Arsalan do at Oxiliry?", "What's Arsalan's tech stack?", "How can I contact Arsalan?"];

export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, loading, open]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const send = async (text) => {
    const question = text.trim();
    if (!question || loading) return;
    // The greeting is UI-only; Gemini expects the conversation to start with a user turn.
    const history = [...messages, { role: "user", text: question }];
    setMessages(history);
    setInput("");
    setError("");
    setLoading(true);
    try {
      const reply = await askGemini(history.slice(1));
      setMessages([...history, { role: "model", text: reply }]);
    } catch (err) {
      setError(err.message.startsWith("The assistant") ? err.message : "Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {open && (
        <div
          id="chat-panel"
          role="dialog"
          aria-label="Chat with Arsalan's AI assistant"
          className="flex h-[min(32rem,calc(100dvh-7rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl sm:w-96 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">Ask about Arsalan</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">AI assistant · answers may be imperfect</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-8 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Close chat"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => (
              <p
                key={index}
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm whitespace-pre-line ${
                  message.role === "user"
                    ? "ms-auto bg-accent text-white dark:bg-accent-light dark:text-zinc-950"
                    : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100"
                }`}
              >
                {message.text}
              </p>
            ))}
            {loading && (
              <p className="w-fit rounded-2xl bg-zinc-100 px-4 py-2 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                Thinking…
              </p>
            )}
            {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => send(suggestion)}
                    className="chip text-left hover:border-accent hover:text-accent dark:hover:border-accent-light dark:hover:text-accent-light"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="flex gap-2 border-t border-zinc-200 p-3 dark:border-zinc-800"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="input py-2 text-sm"
              placeholder="Ask a question…"
              maxLength={500}
              aria-label="Your question"
            />
            <button
              type="submit"
              className="btn-primary shrink-0 px-3"
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              <i className="bi bi-send"></i>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-2xl text-white shadow-lg transition-colors hover:bg-accent-strong dark:bg-accent-light dark:text-zinc-950 dark:hover:bg-sky-300"
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? "Close chat" : "Ask my AI assistant"}
      >
        <i className={`bi ${open ? "bi-chevron-down" : "bi-chat-dots"}`}></i>
      </button>
    </div>
  );
};
