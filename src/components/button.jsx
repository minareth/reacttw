export const Button = ({label, triggeredFunction}) => {
    return <button className={'bg-amber-200 px-2 py-1 rounded border-black border-solid border'} onClick={() => triggeredFunction()}>{label}</button>;
}