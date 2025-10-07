import {useState} from "react";
import Toast from "react-native-toast-message";

export function useCalculator() {
    const [currentValue, setCurrentValue] = useState("0");
    const [previousValue, setPreviousValue] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);

    const handlePress = (value: string) => {
        if(!isNaN(Number(value)) || value === '.') {
            setCurrentValue((prev) =>
            prev === "0" && value !== '.' ? value : prev + value);
            return;
        }
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
                        case "÷":
                            if (curr === 0) {
                                Toast.show({
                                    type: 'error',
                                    text1: 'Ошибка',
                                    text2: 'Делить на 0 нельзя ⚠️',
                                });
                                return;
                            }
                            result = prev / curr;
                            break;
                    }

                    if(!isFinite(result) || Math.abs(result) > 1e12) {
                        Toast.show({
                            type: 'error',
                            text1: 'Ошибка',
                            text2: 'Слишком большое число 💥',
                        });
                        setCurrentValue("0");
                        setPreviousValue(null);
                        setOperator(null);
                        return;
                    }

                    const formatted = parseFloat(result.toFixed(9)).toString()
                    setCurrentValue(formatted);
                    setOperator(null);
                    setPreviousValue(null);
                }
                break;
        }

    };

    return { currentValue, handlePress };
}
