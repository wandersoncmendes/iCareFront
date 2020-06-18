export interface Icon {
    icon: string;
    pack: string;
}

export interface MenuItem {
    title: string;
    home?: boolean;
    icon?: Icon;
    link?: string;
    children?: MenuItem[];
}
