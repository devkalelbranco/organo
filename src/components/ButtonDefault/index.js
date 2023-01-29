import "./ButtonDefault.css";

const ButtonDefault = (props) => {
    return (
        <button className="button-default">
            {props.children}
        </button>
    )
}

export default ButtonDefault;