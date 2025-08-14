import React from 'react';

export const LoadingIcon = () => {
  return (
    <div className="flex gap-0.5">
      {['#eab308', '#ea580c', '#6EB6F2'].map((color, index) => (
        <div
          key={color}
          className="size-1 animate-ai-bounce rounded-full"
          style={{
            animationDelay: `${index * 0.1}s`,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};
