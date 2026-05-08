'use client';

import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { IToast } from '../types';
import { mainStyle, buttonStyle, notificationStyle, textColor, defaultIcons } from '../static/static';
import { useState } from 'react';

export function Toast(
    {
    type = 'blank',
    label,
    icon,
    action,
    closeButton = true,
    title,
    duration,
    swipe = true,
    swipeDirection = 'right',
    deleteToast
    } : IToast ) {
    const [initialSwipe, setInitialSwipe] = useState<number>(0) 
    const Icon = (defaultIcons[type] && type !== 'blank') ? defaultIcons[type] : icon ? icon : undefined
    const styleMainToaster = {...mainStyle, ...notificationStyle[type]}
    const handleSwipe = (event: React.PointerEvent<HTMLElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId)
        setInitialSwipe(event.clientX)
    }

    const checkSwipe = (event: React.PointerEvent<HTMLElement>) => {
        const difference = initialSwipe - event.clientX;
        if (Math.abs(difference) > 100) {
            if (difference < 0 && swipeDirection === 'right') {
                if (deleteToast) {
                    deleteToast()
                }
            }
            if (difference > 0 && swipeDirection === 'left') {
                if (deleteToast) {
                    deleteToast()
                }
            }
        }
    }

    return (
        <motion.section 
        drag="x"
        exit={{ opacity: 0 }}
        dragDirectionLock
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1, transition: { duration: duration?.animation ?? 0.2 }}}
        onPointerDown={swipe ? handleSwipe : undefined}
        onPointerUp={swipe ? checkSwipe : undefined}
        style={styleMainToaster}
        >
            <section style={{ 
            position: 'relative',
            paddingLeft: '1rem',
            paddingTop: '0.8rem',
            paddingRight: action ? closeButton ? '2.5Arem' : '1rem' : '8rem',
            paddingBottom: '0.8rem',
            display: 'flex', 
            alignItems: 'center',
            gap: 16 }}>
            {
                Icon && Icon !== undefined && <motion.div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
                animate={type === 'loading' ? { rotate: 360 } : {}}
                transition={type === 'loading' ? { repeat: Infinity, duration: 1, ease: "linear" } : {}}>
                        <Icon size={18} color={textColor[type]}/>
                    </motion.div>
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
                marginTop: '0px',
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
                    cursor: 'pointer',
                    zIndex: 10
                }}
                onPointerDown={(event) => {
                    if (deleteToast) {
                        event.stopPropagation()
                        deleteToast()
                    }
                }}>
                    <X size={18} />
                </button>
            }
            </section>
        </motion.section>
    )
}