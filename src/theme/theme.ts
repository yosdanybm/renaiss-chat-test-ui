import { ThemeConfig } from 'antd';


export const themeCustom: ThemeConfig = {
    token: {
        // Colors
        colorPrimary: '#F97316',
        // Font
        fontFamilyCode: 'General Sans',
        fontSizeHeading4: 22,
    },
    components: {
        Layout: {
            colorBgHeader: 'var(--color-primary)',
        },
        Button: {
            colorPrimary: '#F97316',
            colorText: '#FFF',
            // Default
            colorBorder: '#FFF',
            colorBgContainer: 'transparent',
            colorBgTextActive: 'red'
        },
        Card: {
            borderRadius: 10,
        }
    },
}
