import '@fontsource/inter';
import { motion } from 'motion/react';
import { X, LoaderCircle, Check, MessageCircleWarning, Info } from 'lucide-react';

interface IToaster {
    type: 'loading' | 'succesful' | 'error' | 'warning' | 'info' | 'blank'
    action?: {
        label?: string,
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        styling: string
    },
    label: string
    title?: string
    icon?: SVGAElement,
    positionX?: 'left' | 'center' | 'right'
    positionY?: 'up' | 'middle' | 'bottom'
    closeButton?: boolean
    closeButtonPosition?: 'outside' | 'top-right'
    border?: boolean,
    borderColor?: {
        light: string,
        dark: string
    }
    duration?: {
        animation: number,
        notification: number
    },
    swipe?: boolean,
    swipeDirection?: 'left' | 'right'

}

const notificationPosition = {
    left: {
        up: {
            left: 16,
            top: 16
        },
        middle: {
            left: 16,
            top: '50%',
            translateY: '-50%'
        },
        bottom: {
            left: 16,
            bottom: 16
        }
    },
    center: {
        up: {
            top: 16,
            left: '50%',
            translateX: '-50%'
        },
        middle: {
            top: '50%',
            left: '50%',
            translateY: '-50%',
            translateX: '-50%'
        },
        bottom: {
            bottom: 16,
            left: '50%',
            translateX: '-50%'
        }
    },
    right: {
        up: {
            top: 16,
            right: 16
        },
        middle: {
            right: 16,
            top: '50%',
            translateY: '-50%'
        },
        bottom: {
            right: 16,
            bottom: 16
        }
    }
}
const mainStyle = {
    position: 'absolute' as const,
    borderRadius: 8,
    boxShadow: '0px 0px 10px #eeeff1',
    cursor: 'pointer'
}
const notificationStyle = {
    blank: {
        backgroundColor: '#ffffff',
        border: '1px solid #eeeff1',
    },
    loading: {
        backgroundColor: '#ffffff',
        border: '1px solid #eeeff1'
    },
    succesful: {
        backgroundColor: '#dcfce7',
        border: '1px solid #bbf7d0'
    },
    error: {
        backgroundColor: '#fef2f2',
        border: '1px solid #fee2e2',
    },
    warning: {
        backgroundColor: '#ffedd5',
        border: '1px solid #fed7aa'
    },
    info: {
        backgroundColor: '#dbeafe',
        border: '1px solid #ddd6fe'
    }
}

const textColor = {
    blank: '#1f2937',
    loading: '#1f2937',
    succesful: '#166534',
    error: '#b91c1c',
    warning: '#ea580c',
    info: '#1e3a8a',
}

const defaultIcons = {
    "loading": LoaderCircle,
    "succesful": Check,
    "error": MessageCircleWarning,
    "warning": X,
    "info": Info
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
    title
    } : IToaster) {
        
    const Icon = defaultIcons[type] ? defaultIcons[type] : icon ? icon : undefined
    return (
        <motion.section 
        whileTap={{ scale: 0.95 }}
        exit={{ opacity: 0 }}
        drag
        dragDirectionLock
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { duration: 0.2 }}}
         
        style={{
            ...mainStyle,
            ...notificationStyle[type],
            ...notificationPosition[positionX][positionY]
        }}>
            <section style={{ 
            position: 'relative',
            paddingLeft: '1rem',
            paddingTop: '4px',
            paddingRight: '8rem',
            paddingBottom: '4px',
            display: Icon ? 'flex' : 'block', 
            alignItems: 'center',
            gap: 16 }}>
            {
                Icon && <Icon size={14} />
            }
            <section>
            {
                title && <p style={{
                fontFamily: 'Inter',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '4px',
                color: textColor[type]
            }}>{title}</p>
            }
            <p style={{
                fontFamily: 'Inter',
                fontSize: '0.8rem',
                marginTop: title ? '0px' : '16px',
                color: textColor[type]
            }}>{label}</p>
            </section>

            {
                closeButton && <button style={{
                    background: 'transparent',
                    border: '0px',
                    color: textColor[type],
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    cursor: 'pointer'
                }}>
                    <X size={18}/>
                </button>
            }
            </section>
        </motion.section>
    )
}