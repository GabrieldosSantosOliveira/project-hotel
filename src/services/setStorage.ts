import AsyncStorage from '@react-native-async-storage/async-storage';
export async function setStorage(
  key: string,
  value: unknown
) {
  try {
    const valueToString = JSON.stringify(value);
    await AsyncStorage.setItem(key, valueToString);
  } catch (error) {
    console.log(error);
  }
}
