import './button.css';
export const Button = ({label, triggeredFunction}) => {
    return <button className={'button'} onClick={() => triggeredFunction()}>{label}</button>;
}