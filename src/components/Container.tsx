type ConatinerProps= {
    styles: React.CSSProperties
}
export const Container = (props: ConatinerProps) => {
    return (
        <div style={props.styles}>
            Text content goes here 
        </div>
    )
}