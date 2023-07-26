interface ButtonProps {
    text: string,
    color: string,
    onClick: React.MouseEventHandler<HTMLDivElement>,
}
function Button(props: ButtonProps) {
    return (
        <div onClick={props.onClick} className={`w-[174px] h-[42px] sm:w-[100px]  rounded-lg flex justify-center items-center ${props.color} cursor-pointer`}>
            {props.text}
            
        </div>
    );
}

export default Button;