
export default function Calculation({
    onFirstNumberChanged,
    onOperationChanged,
    onSecondNumberChanged,
}) {
    return (
        <p>
            <input type="number" onChange={onFirstNumberChanged} />
            <select onChange={onOperationChanged}>
                <option value='add'>+</option>
                <option value='subtract'>-</option>
                <option value='multiply'>*</option>
                <option value='divide'>/</option>
            </select>
            <input type="number" onChange={onSecondNumberChanged} />
        </p>
    )
}