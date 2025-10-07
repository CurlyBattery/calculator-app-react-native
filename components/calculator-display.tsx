import {ThemedView} from "@/components/themed-view";
import {ThemedText} from "@/components/themed-text";
import {StyleSheet} from 'react-native';
import {useCalculator} from "@/hooks/use-calculator";
import CalculatorButton from "@/components/ui/calculator-button";
import {Colors} from "@/constants/theme";

export function CalculatorDisplay() {
    const {currentValue, handlePress }= useCalculator();

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.display}>
                <ThemedText style={styles.displayText}>{currentValue}</ThemedText>
            </ThemedView>

            <ThemedView style={styles.grid}>
                <ThemedView style={styles.row}>
                    <CalculatorButton label={"7"} onPress={handlePress}/>
                    <CalculatorButton label={"8"} onPress={handlePress}/>
                    <CalculatorButton label={"9"} onPress={handlePress}/>
                    <CalculatorButton label={"÷"} onPress={handlePress}/>
                </ThemedView>

                <ThemedView style={styles.row}>
                    <CalculatorButton label={"4"} onPress={handlePress}/>
                    <CalculatorButton label={"5"} onPress={handlePress}/>
                    <CalculatorButton label={"6"} onPress={handlePress}/>
                    <CalculatorButton label={"×"} onPress={handlePress}/>
                </ThemedView>

                <ThemedView style={styles.row}>
                    <CalculatorButton label={"1"} onPress={handlePress}/>
                    <CalculatorButton label={"2"} onPress={handlePress}/>
                    <CalculatorButton label={"3"} onPress={handlePress}/>
                    <CalculatorButton label={"-"} onPress={handlePress}/>
                </ThemedView>

                <ThemedView style={styles.row}>
                    <CalculatorButton label={"0"} onPress={handlePress}/>
                    <CalculatorButton label={"."} onPress={handlePress}/>
                    <CalculatorButton label={"C"} onPress={handlePress}/>
                    <CalculatorButton label={"+"} onPress={handlePress}/>
                </ThemedView>

                <ThemedView style={styles.row}>
                    <CalculatorButton label={"="} onPress={handlePress}/>
                    <CalculatorButton label={"DEL"} onPress={handlePress}/>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        borderRadius: 20,
        overflow:'hidden',
        paddingVertical: 10,
    },
    display: {
      height: 120,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    displayText: {
        color: '#fff',
        fontSize: 50,
        marginBottom: 40,
    },
    grid: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})