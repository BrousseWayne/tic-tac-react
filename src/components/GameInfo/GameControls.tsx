import "./GameControls.css";
export const GameControls = ({ onReset }: { onReset: () => void }) => {
  return (
    <div className="reset-container">
      <button className="reset-btn" onClick={onReset}>
        ↻ New Game
      </button>
    </div>
  );
};
