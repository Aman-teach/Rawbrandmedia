/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from "react";

type MenuOverlayContextValue = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
};

const MenuOverlayContext = createContext<MenuOverlayContextValue | null>(null);

export const MenuOverlayProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      openMenu,
      closeMenu,
      toggleMenu
    }),
    [isOpen, openMenu, closeMenu, toggleMenu]
  );

  return <MenuOverlayContext.Provider value={value}>{children}</MenuOverlayContext.Provider>;
};

export const useMenuOverlay = () => {
  const context = useContext(MenuOverlayContext);

  if (!context) {
    throw new Error("useMenuOverlay must be used within MenuOverlayProvider");
  }

  return context;
};
