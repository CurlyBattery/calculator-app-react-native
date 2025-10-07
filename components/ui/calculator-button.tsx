import {TouchableOpacity, Text, StyleSheet} from "react-native";
import Feather from '@expo/vector-icons/Feather';

export default function CalculatorButton({label, onPress}) {
    const isIcon = label === 'DEL';

    return (
        <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
            {isIcon ? (
                <Feather name="delete" size={24} color="white" />
            )
                : (
                    <Text style={styles.text}>{label}</Text>
                )
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 70,
        margin: 5,
        borderRadius: 12,
        backgroundColor: '#2c2c2c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 26,
        fontWeight: '500',
    },
});
