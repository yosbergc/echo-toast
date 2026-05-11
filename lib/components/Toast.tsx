'use client';

import { X } from 'lucide-react';
import type { IToast } from '../types';
import { mainStyle, buttonStyle, notificationStyle, textColor, defaultIcons } from '../static/static';
import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import './toastStyle.css'

export function Toast(
    {
    type = 'blank',
    label,
    icon,
    action,
    closeButton = true,
    title,
    swipe = true,
    swipeDirection = 'right',
    deleteToast
    } : IToast ) {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const toastRef = useRef<HTMLDivElement>(null)
    const [initialSwipe, setInitialSwipe] = useState<number>(0) 
    const [hidden, setHidden] = useState<boolean>(false)
    const Icon = (defaultIcons[type] && type !== 'blank') ? defaultIcons[type] : icon ? icon : undefined
    const styleMainToaster = {...mainStyle, ...notificationStyle[type]}
    const handleSwipe = (event: React.PointerEvent<HTMLElement>) => {
        event.currentTarget.setPointerCapture(event.pointerId)
        setInitialSwipe(event.clientX)
    }
    function handleExitAnimation() {
        toastRef?.current?.classList.remove('echo-lib-enter')
        toastRef?.current?.classList.add('echo-lib-fade-out')
        setHidden(true)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    const checkSwipe = (event: React.PointerEvent<HTMLElement>) => {
        const difference = initialSwipe - event.clientX;
        if (Math.abs(difference) > 100) {
            if (difference < 0 && swipeDirection === 'right') {
                handleExitAnimation()
            }
            if (difference > 0 && swipeDirection === 'left') {
                handleExitAnimation()
            }
        }
    }

    useLayoutEffect(() => {
        if (toastRef.current) {
            toastRef.current.classList.add('echo-lib-enter')
        }
    }, [])

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
        if (toastRef.current) {
            toastRef.current.classList.remove('echo-lib-enter')
            toastRef.current.classList.add('echo-lib-fade-out')
            
            setHidden(true)
        }}, 5000)

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])


    function handleExit() {
        if (hidden) {
            deleteToast!()
        }
    }
    return (
        <section
        onPointerDown={swipe ? handleSwipe : undefined}
        onPointerUp={swipe ? checkSwipe : undefined}
        onAnimationEnd={handleExit}
        style={styleMainToaster}
        ref={toastRef}
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
                Icon && Icon !== undefined && <section style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
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
                    event.stopPropagation()
                    handleExitAnimation()
                }}>
                    <X size={18} />
                </button>
            }
            </section>
        </section>
    )
}