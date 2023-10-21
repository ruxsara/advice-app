interface MessageCountProp {
  count: number;
}

export const MessageCount = ({ count }: MessageCountProp) => {
  return (
    <h3>
      You have read <strong>{count}</strong> pieces of advice.
    </h3>
  );
};
