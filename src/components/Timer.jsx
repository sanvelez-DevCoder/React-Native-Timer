import { Text, View, StyleSheet } from "react-native";

export default function Timer({ time }) {
    const formattedTime = `${Math.floor(time / 60)
        .toString()
        .padStart(2, "0")}:${(time % 60)
            .toString().padStart(2, "0")}`;
    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        justifyContent: 'center',
        backgroundColor: "#E9E9E9",
        padding: 15,
        borderRadius: 15,
    },
    time: {
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        color: "#34495E",
    },
})