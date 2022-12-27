import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getStorage<T = any>(
  key: string
): Promise<T | undefined> {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
