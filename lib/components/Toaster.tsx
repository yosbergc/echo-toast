import '@fontsource/open-sans';
import { motion } from 'motion/react';

interface IToaster {
    type: 'loading' | 'succesful' | 'error' | 'warning' | 'info' | 'blank'
    action?: {
        label?: string,
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        styling: string
    },
    label: string
    icon?: SVGAElement,
    positionX: 'left' | 'center' | 'right'
    positionY: 'up' | 'middle' | 'bottom'
    closeButton?: boolean
    closeButtonPosition: 'outside' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'
    theme: 'light' | 'dark',
    border: boolean,
    borderColor: {
        light: string,
        dark: string
    }
    backgroundColor: string,
    duration: number,
    swipe: boolean,
    swipeDirection: 'left' | 'right'

}

const typeStyling = {
    loading: {

    }
}

export function Toaster(
    {
    type = 'blank',
    action,
    label,
    icon,
    positionX = 'right',
    positionY = 'bottom',
    closeButton = true,
    closeButtonPosition = 'top-right',
    theme = 'light'
    } : IToaster) {
    return (
        <motion.section 
        initial={{ opacity: 0, scale: 0 }} 
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.2 }}} 
        style={{
            border: '1px solid #'
        }}>
            <p style={{
                fontFamily: 'Open Sans',
                fontSize: '0.8rem'
            }}>{label}</p>
        </motion.section>
    )
}