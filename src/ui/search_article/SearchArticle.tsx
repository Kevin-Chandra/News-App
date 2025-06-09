import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from 'src/typings/Navigations';

export default function SearchArticle({
  route,
  navigation,
}: Navigation.RootStackScreenProps<'SearchArticle'>) {
  return (
    <SafeAreaView>
      <Text>Search Article Screen</Text>
    </SafeAreaView>
  );
}
