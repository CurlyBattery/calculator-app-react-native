import {useState} from "react";

export function useCalculator() {
    const [currentValue, setCurrentValue] = useState("0");
    const [previousValue, setPreviousValue] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const handlePress = (value: string) => {
        if(!isNaN(Number(value)) || value === '.') {
            setCurrentValue((prev) =>
            prev === "0" && value !== '.' ? value : prev + value);
        } else {
            switch (value) {
                case "C":
                    setCurrentValue("0");
                    setPreviousValue(null);
                    setOperator(null);
                    break;

                case "DEL":
                    setCurrentValue((prev) =>
                    prev.length > 1 ? prev.slice(0, -1): "0");
                    break;

                case "+":
                case "-":
                case "×":
                case "÷":
                    setOperator(value);
                    setPreviousValue(currentValue);
                    setCurrentValue("0");
                    break;
                case "=":
                    if (operator && previousValue) {
                        const prev = parseFloat(previousValue);
                        const curr = parseFloat(currentValue);
                        let result = 0;

                        switch (operator) {
                            case "+": result = prev + curr; break;
                            case "-": result = prev - curr; break;
                            case "×": result = prev * curr; break;
                            case "÷": result = curr !== 0 ? prev / curr : NaN; break;
                        }

                        setCurrentValue(result.toString());
                        setOperator(null);
                        setPreviousValue(null);
                    }
                    break;
            }
        }
    };

    return { currentValue, handlePress };
}