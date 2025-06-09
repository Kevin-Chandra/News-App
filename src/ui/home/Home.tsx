import { useTranslation } from 'react-i18next';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from 'src/typings/Navigations';

export default function Home({
  navigation,
}: Navigation.RootStackScreenProps<'Home'>) {
  const { t } = useTranslation('news');
  return (
    <SafeAreaView>
      <Text>{t('home.title')}</Text>
      <Button
        onPress={() => {
          navigation.navigate('ArticleSearch');
        }}>
        {t('searchArticle.title')}
      </Button>

      <Button
        onPress={() => {
          navigation.navigate('ArticleDetails', { articleId: '4429' });
        }}>
        {t('articleDetails.title')}
      </Button>
    </SafeAreaView>
  );
}
