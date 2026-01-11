'use client'

import {
  Button,
  MenuArrow,
  MenuGroup,
  MenuGroupLabel,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuRadioItemIndicator,
  MenuRadioItemLabel,
  MenuRoot,
  MenuTrigger,
} from '@lglab/compose-ui'
import { Check, Palette } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'compose-ui-theme-color'

// Preset colors with hue values for OKLCH
const themeColors = [
  { name: 'Default', hue: null, chroma: 0 },
  { name: 'Blue', hue: 265.638, chroma: 0.199 },
  { name: 'Violet', hue: 292.581, chroma: 0.232 },
  { name: 'Rose', hue: 13.697, chroma: 0.188 },
  { name: 'Orange', hue: 38.402, chroma: 0.195 },
  { name: 'Green', hue: 151.328, chroma: 0.119 },
  { name: 'Teal', hue: 188.216, chroma: 0.078 },
] as const

//oklch(55.3% 0.195 38.402)

type ThemeColor = (typeof themeColors)[number]

function applyThemeColor(colorName: string, isDark: boolean) {
  const color = themeColors.find((c) => c.name === colorName)
  if (!color || color.hue === null) {
    // Reset to default
    document.documentElement.style.removeProperty('--primary')
    document.documentElement.style.removeProperty('--primary-foreground')
    document.documentElement.style.removeProperty('--ring')
    return
  }

  // Light mode: darker primary, light foreground
  // Dark mode: lighter primary, dark foreground
  const lightness = isDark ? 0.7 : 0.45
  const foregroundLightness = isDark ? 0.15 : 0.98

  document.documentElement.style.setProperty(
    '--primary',
    `oklch(${lightness} ${color.chroma} ${color.hue})`,
  )
  document.documentElement.style.setProperty(
    '--primary-foreground',
    `oklch(${foregroundLightness} 0 0)`,
  )
  document.documentElement.style.setProperty(
    '--ring',
    `oklch(${lightness} ${color.chroma} ${color.hue})`,
  )
}

function getSwatchColor(color: ThemeColor): string {
  if (color.hue === null) return 'oklch(0.205 0 0)'
  return `oklch(0.5 ${color.chroma} ${color.hue})`
}

export function ThemeColorSelector() {
  const { resolvedTheme } = useTheme()
  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem(STORAGE_KEY) || 'Default',
  )

  // Apply theme color when theme changes (after mount)
  useEffect(() => {
    applyThemeColor(currentColor, resolvedTheme === 'dark')
  }, [resolvedTheme, currentColor])

  const handleColorChange = (colorName: string) => {
    localStorage.setItem(STORAGE_KEY, colorName)
    setCurrentColor(colorName)
  }

  return (
    <MenuRoot>
      <MenuTrigger
        render={(props) => (
          <Button {...props} variant='ghost' size='icon' aria-label='Select theme color'>
            <Palette className='size-4' />
          </Button>
        )}
      />
      <MenuPortal>
        <MenuPositioner>
          <MenuPopup>
            <MenuArrow />
            <MenuGroup>
              <MenuGroupLabel>Theme</MenuGroupLabel>
              <MenuRadioGroup value={currentColor} onValueChange={handleColorChange}>
                {themeColors.map((color) => (
                  <MenuRadioItem key={color.name} value={color.name}>
                    <span
                      className='size-4 rounded-sm shrink-0'
                      style={{ backgroundColor: getSwatchColor(color) }}
                    />
                    <MenuRadioItemLabel>{color.name}</MenuRadioItemLabel>
                    <MenuRadioItemIndicator className='ml-auto col-start-3'>
                      <Check className='size-4' />
                    </MenuRadioItemIndicator>
                  </MenuRadioItem>
                ))}
              </MenuRadioGroup>
            </MenuGroup>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  )
}
