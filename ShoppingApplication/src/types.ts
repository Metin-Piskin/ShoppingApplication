export type RootStackParamList = {
    TabBar: undefined,
    Detail: {
        Citem?: any;
        Sitem?: any;
    }
    Categori: {
        item: any;
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

export type ProductCardProps = {
    image: string;
    title: string;
    price: string;
    onPress: () => void;
};

export type HeaderProps = {
    title: string;
};

export type HeaderBackProps = {
    onPress: () => void;
    title: string;
};

export type DetailComponetProps = {
    prop: any;
};