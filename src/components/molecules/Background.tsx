import "../../styles/background.scss";


const generateArray = (size: number): number[] => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array;
};

export default () => {
    const numBubbles = 20;
    return (
        <div className={"background"}>
            {
                generateArray(numBubbles).map((index) => (
                    <span className={"bubble"} key={index}/>
                ))
            }
        </div>
    );
};
