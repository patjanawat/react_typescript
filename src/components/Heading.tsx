type headingProps = {
    children:string
}
export const Heading = (props: headingProps) => {
    return <h2>{props.children}</h2>
}