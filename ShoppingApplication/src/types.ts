export type RootStackParamList = {
    Home: undefined,
    Detail: {
        name: string;
    }
    Categori: {
        item: {
            title: string;
        }
    }
};

export type CampaignThumbnailProps = {
    onPress: () => void;
};

export type CategoriesProps = {
    title: string;
    image: string;
    onPress: () => void;
};

export type SearchInputProps = {
    onChangeText: any
};
