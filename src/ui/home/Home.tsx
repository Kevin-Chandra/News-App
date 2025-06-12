import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from 'src/typings/Navigations';

export default function Home({
  route,
  navigation,
}: Navigation.RootStackScreenProps<'Home'>) {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('ArticleSearch');
        }}>
        Article Search
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('ArticleDetails', { articleId: '4429' });
        }}>
        Article Details
      </Button>
    </SafeAreaView>
  );
}
