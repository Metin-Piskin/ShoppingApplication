export type RootStackParamList = {
    Login: undefined;
    SignIn: undefined;
    AuthStack: undefined;

    TabBar: undefined;
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
    onChangeText: any;
    disabled: any;
    ModalOpenPress: () => void;
};

export type ProductCardProps = {
    item: any;
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

export type UserAboutProps = {
    EditPress: () => void;
    ExitPress: () => void;
    item: any;
};

export type OrderSituationProps = {
    Durum: string;
};