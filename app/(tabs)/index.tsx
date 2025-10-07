import {StyleSheet, View} from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {CalculatorDisplay} from "@/components/calculator-display";
import Toast, {BaseToast, ErrorToast} from "react-native-toast-message";
const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={styles.toastContainer}
            contentContainerStyle={styles.content}
            text1Style={styles.text1}
            text2Style={styles.text2}
        />
    ),
    error: (props) => (
        <ErrorToast
            {...props}
            style={[styles.toastContainer, { borderLeftColor: "#ff4444" }]}
            text1Style={styles.text1}
            text2Style={styles.text2}
        />
    ),
};
export default function HomeScreen() {
  return (


      <ThemedView style={styles.titleContainer}>
          <Toast position='bottom' config={toastConfig}/>
          <View style={styles.header}>
              <ThemedText type="title">Welcome!</ThemedText>
              <HelloWave />
          </View>

          <View style={styles.calculatorWrapper}>
              <CalculatorDisplay />
          </View>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
        flex: 1,
      paddingVertical: 60,
      alignItems: 'center',
  },
    header: {
      flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 30,
    },
    calculatorWrapper: {
      width: '100%',
        maxWidth: 380,
    },
    toastContainer: {
        borderLeftWidth: 6,
        borderRadius: 14,
        backgroundColor: "#1c1c1c",
        minHeight: 80,
    },
    content: {
        paddingHorizontal: 15,
    },
    text1: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
    },
    text2: {
        fontSize: 18,
        color: "#ddd",
    },
});
