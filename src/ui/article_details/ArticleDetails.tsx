import { useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from 'src/typings/Navigations';

export default function ArticleDetails({
  route,
  navigation,
}: Navigation.RootStackScreenProps<'ArticleDetails'>) {
  const { articleId } = route.params;
  const { t } = useTranslation('news');
  return (
    <SafeAreaView>
      <Text>{t('articleDetails.title')}</Text>
      <Text>{articleId}</Text>
    </SafeAreaView>
  );
}
