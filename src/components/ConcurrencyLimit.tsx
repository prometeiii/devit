import React, { useState, useRef, ChangeEvent, MouseEvent } from 'react';

type ConcurrencyLimitState = {
  concurrencyLimit: number;
  requestsPerSecond: number;
  isStarted: boolean;
  activeRequests: number;
};

const ConcurrencyLimit: React.FC = () => {
  const [concurrencyLimit, setConcurrencyLimit] = useState<number>(10); // Default concurrency
  const [requestsPerSecond, setRequestsPerSecond] = useState<number>(10); // Default rate limit
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const requestIndex = useRef<number>(1);

  const handleStart = (e: MouseEvent<HTMLButtonElement>) => {
    setIsStarted(true);
    requestIndex.current = 1;
  };

  const handleConcurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConcurrencyLimit(Number(e.target.value));
  };

  const handleRequestsPerSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRequestsPerSecond(Number(e.target.value));
  };

  return (
    <div>
      <input
        type="number"
        min="0"
        max="100"
        value={concurrencyLimit}
        onChange={handleConcurrencyChange}
        placeholder="Concurrency"
        required
      />
      <input
        type="number"
        min="0"
        max="100"
        value={requestsPerSecond}
        onChange={handleRequestsPerSecondChange}
        placeholder="Requests per second"
        required
      />
      <button onClick={handleStart} disabled={isStarted}>
        Start
      </button>
    </div>
  );
};

export default ConcurrencyLimit;
