export const Button = ({label, triggeredFunction}) => {
    return <button className={'px-2 py-1 rounded border-black border-solid border'} onClick={() => triggeredFunction()}>{label}</button>;
}
