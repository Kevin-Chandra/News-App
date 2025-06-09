import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from 'src/typings/Navigations';

export default function ArticleDetails({
  route,
  navigation,
}: Navigation.RootStackScreenProps<'ArticleDetails'>) {
  const { articleId } = route.params;
  return (
    <SafeAreaView>
      <Text>Article Details Screen</Text>
      <Text>{articleId}</Text>
    </SafeAreaView>
  );
}
