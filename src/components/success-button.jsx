export const SuccessButton = ({label, triggeredFunction}) => {
  return <button className={'px-2 py-1 rounded border-black border-solid border bg-lime-100'} onClick={() => triggeredFunction()}>{label}</button>;
}
