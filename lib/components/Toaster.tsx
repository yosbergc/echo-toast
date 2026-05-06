import { motion } from 'motion/react';
import { X, LoaderCircle, Check, ShieldAlert, Info } from 'lucide-react';

interface IToaster {
    type: 'loading' | 'succesful' | 'error' | 'warning' | 'info' | 'blank'
    action?: {
        label: string,
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        styling?: string
    },
    label: string
    title?: string
    icon?: React.ElementType,
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
    boxShadow: '0px 0px 2px #eeeff1'
}
const buttonStyle = {
    blank: {
        backgroundColor: '#e5e7eb',
        color: '#4b5563'
    },
    loading: {
        backgroundColor: '#e5e7eb',
        color: '#4b5563'
    },
    succesful: {
        backgroundColor: '#4ade80',
        color: '#166534'
    },
    error: {
        backgroundColor: '#fecaca',
        color: '#991b1b'
    },
    warning: {
        backgroundColor: '#f97316',
        color: 'white'
    },
    info: {
        backgroundColor: '#1e3a8a',
        color: 'white'
    }
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
    "error": X,
    "warning": ShieldAlert,
    "info": Info,
    "blank": undefined
}
export function Toaster(
    {
    type = 'blank',
    label,
    icon,
    action,
    positionX = 'right',
    positionY = 'bottom',
    closeButton = true,
    title
    } : IToaster) {
        
    const Icon = (defaultIcons[type]) ? 
    (type !== 'blank') ? 
    defaultIcons[type] : icon ? 
    icon : undefined : undefined

    return (
        <motion.section 
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
            paddingTop: '0.8rem',
            paddingRight: action ? '3rem' : '8rem',
            paddingBottom: '0.8rem',
            display: Icon ? 'flex' : 'block', 
            alignItems: 'center',
            gap: 16 }}>
            {
                Icon && Icon !== undefined && <section>
                        <Icon size={18} color={textColor[type]}/>
                    </section>
            }
            <section style={{
                display: 'flex',
                flexDirection: action ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16
            }}>
            <section>
                {
                title && <p style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '4px',
                marginTop: '0px',
                color: textColor[type]
            }}>{title}</p>
            }
            <p style={{
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: '0.8rem',
                marginTop: title ? '0px' : '16px',
                marginBottom: '0px',
                color: textColor[type]
            }}>{label}</p>
            </section>
            {
                action && <button onClick={action.onClick} style={{
                    border: 'none',
                    backgroundColor: buttonStyle[type].backgroundColor,
                    paddingTop: '0.4rem',
                    paddingBottom: '0.4rem',
                    paddingLeft: '0.8rem',
                    paddingRight: '0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                    cursor: 'pointer',
                    fontWeight: 600,
                    color: buttonStyle[type].color
                }}>
                    {action.label}
                </button>
            }
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