import { NavigatorScreenParams } from '@react-navigation/native';

declare namespace Navigation {
    type RootNavigatorParamList = {
        Home: undefined;
        ArticleSearch: undefined;
        ArticleDetails: {articleId: string}
    };

    type RootStackScreenProps<T extends keyof RootNavigatorParamList> = NativeStackScreenProps<RootNavigatorParamList, T>;
}
