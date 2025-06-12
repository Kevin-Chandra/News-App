import { useTranslation } from 'react-i18next';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from 'src/typings/Navigations';

export default function SearchArticle({
  route,
  navigation,
}: Navigation.RootStackScreenProps<'SearchArticle'>) {
  const { t } = useTranslation('news');

  return (
    <SafeAreaView>
      <Text>{t('searchArticle.title')}</Text>
    </SafeAreaView>
  );
}
