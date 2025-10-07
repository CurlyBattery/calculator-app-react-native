import {StyleSheet, View} from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import {CalculatorDisplay} from "@/components/calculator-display";

export default function HomeScreen() {
  return (
      <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
        <ThemedView style={styles.titleContainer}>
            <View style={styles.header}>
                <ThemedText type="title">Welcome!</ThemedText>
                <HelloWave />
            </View>

            <View style={styles.calculatorWrapper}>
                <CalculatorDisplay />
            </View>

        </ThemedView>
      </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
        flex: 1,
      paddingVertical: 20,
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
    }
});
