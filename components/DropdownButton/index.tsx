"use client"

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { articles } from '@/content/articles';


const menuItems = articles.map((article) => ({
    title: article.fulltitle,
    url: article.path,
    imagen: article.coverImage,
    action: article.id === 0
        ? () => console.log("Acción personalizada para Portada")
        : undefined, // Agrega acción personalizada para un artículo específico
}));


export const DropdownMenu = () => {
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(
        null
    );
    const router = useRouter();

    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prev) => {
            if (!prev) setFocusedIndex(null);
            return !prev;
        });
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLButtonElement>
    ) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setOpen(true);
            setFocusedIndex(0); // Focus on the first item when arrow is pressed
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleToggle();
        } else if (event.key === 'Escape') {
            setOpen(false);
            setFocusedIndex(null); // Reset focus when dropdown closes
        }
    };

    const handleItemKeyDown = (
        event: React.KeyboardEvent<HTMLLIElement>,
        index: number
    ) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setFocusedIndex((prevIndex) =>
                prevIndex! < menuItems.length - 1 ? prevIndex! + 1 : 0
            );
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setFocusedIndex((prevIndex) =>
                prevIndex! > 0 ? prevIndex! - 1 : menuItems.length - 1
            );
        } else if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const selectedItem = menuItems[index];
            if (selectedItem.url) {
                router.push(selectedItem.url);
            } else if (selectedItem.action) {
                selectedItem.action();
            }
            setOpen(false);
            setFocusedIndex(null);
            buttonRef.current?.focus();
        } else if (event.key === 'Escape') {
            setOpen(false);
            setFocusedIndex(null);
            buttonRef.current?.focus();
        }
    };

    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (
                open &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [open]);

    useEffect(() => {
        if (open && focusedIndex !== -1) {
            const focusedItem = document.getElementById(
                `dropdown-item-${focusedIndex}`
            );
            focusedItem?.focus();
        }
    }, [focusedIndex, open]);

    return (
        <div className="relative" ref={menuRef}>
            <button
                ref={buttonRef}
                aria-expanded="false"
                aria-label="Index"
                className="p-2 bg-transparent text-white"
                id="dropdown-button"
                type="button"
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
            >
                <svg
                    fill="rgba(255,255,255,1)"
                    height="24"
                    width="24"
                    viewBox="0 0 40 40"
                    className="align-middle"
                >
                    <g>
                        <path d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z"></path>
                    </g>
                </svg>
            </button>
            {open && (
                <div
                    className="
                    absolute
                    top-12
                    left-0
                    right-auto
                    w-56
                    max-w-[calc(100vw-1rem)]
                    rounded-md
                    bg-white
                    dark:bg-gray-800
                    "
                >
                    <ul
                        role="menu"
                        id="dropdown-menu"
                        aria-labelledby="dropdown-button"
                        className="w-56 h-auto shadow-md rounded-md p-1 border bg-white"
                    >
                        {menuItems.map((item, index) => (
                            <li
                                role="menuitem"
                                key={index}
                                id={`dropdown-item-${index}`}
                                className={
                                    `
                                    relative
                                    flex 
                                    items-center 
                                    gap-2 
                                    px-4 
                                    py-2 
                                    text-xs 
                                    font-stemligth
                                    hover:bg-gray-100 
                                    dark:hover:bg-gray-700
                                    rounded-md ${focusedIndex === index ? 'bg-gray-100 dark:bg-gray-700' : ''
                                    }`}
                                tabIndex={focusedIndex === index ? 0 : -1}
                                onKeyDown={(event) => handleItemKeyDown(event, index)}
                            >
                                {
                                    <Link href={item.url}>
                                        <Image
                                            src={item.imagen}
                                            width={50}
                                            height={50}
                                            alt="image"
                                            style={{
                                                objectFit: 'cover',
                                                transform: 'scale(1.2)',
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </Link>
                                }
                                {item.url ? (
                                    <Link
                                        href={item.url}
                                        className="w-full text-left"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <button
                                        className="w-full text-left"
                                        onClick={() => {
                                            item.action?.();
                                            setOpen(false);
                                        }}
                                        type="button"
                                    >
                                        {item.title}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
