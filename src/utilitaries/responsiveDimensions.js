import { useWindowDimensions } from 'react-native';

/**
 * Hook customizado para obter dimensões responsivas
 * Retorna valores escalados com base na largura e altura da tela
 */
export const useResponsiveDimensions = () => {
    const { width, height } = useWindowDimensions();
    
    // Definir tamanho de referência (largura base: 375px - iPhone 8)
    const baseWidth = 375;
    const baseHeight = 667;
    
    // Calcular escala
    const widthScale = width / baseWidth;
    const heightScale = height / baseHeight;
    const scale = Math.min(widthScale, heightScale);
    
    // Função para escalar valores
    const scaleSize = (size) => Math.round(size * scale);
    
    return {
        width,
        height,
        scale,
        scaleSize,
        // Tamanhos comuns
        sizes: {
            // Imagens
            imageLarge: scaleSize(400),
            imageMedium: scaleSize(200),
            imageSmall: scaleSize(150),
            
            // Ícones
            iconLarge: scaleSize(80),
            iconMedium: scaleSize(40),
            iconSmall: scaleSize(24),
            
            // Fontes
            fontSize: {
                h1: scaleSize(24),
                h2: scaleSize(20),
                h3: scaleSize(18),
                body: scaleSize(16),
                small: scaleSize(14),
                tiny: scaleSize(12),
            },
            
            // Espaçamento
            spacing: {
                xs: scaleSize(4),
                sm: scaleSize(8),
                md: scaleSize(12),
                lg: scaleSize(16),
                xl: scaleSize(20),
                xxl: scaleSize(24),
            },
            
            // Dimensões
            topBarHeight: scaleSize(80),
            buttonHeight: scaleSize(45),
            cardRadius: scaleSize(8),
        },
    };
};

/**
 * Função para calcular dimensão responsiva sem hook (para contextos que não suportam hooks)
 */
export const getResponsiveSize = (width, baseSize, baseWidth = 375) => {
    const scale = width / baseWidth;
    return Math.round(baseSize * scale);
};

/**
 * Função para obter altura responsiva
 */
export const getResponsiveHeight = (width, height, baseSize, baseWidth = 375, baseHeight = 667) => {
    const scale = Math.min(width / baseWidth, height / baseHeight);
    return Math.round(baseSize * scale);
};
