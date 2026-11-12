// Generated from Sanzo Wada, A Dictionary of Color Combinations, via the MIT-licensed
// mattdesl/dictionary-of-colour-combinations dataset. Every theme passes WCAG 4.5:1 for
// body text (foreground, muted-foreground, and each *-foreground on its surface).
// chart-1..5 hold the raw palette colors and drive the decorative shapes.

export type WadaTheme = {
  id: number
  name: string
  mood: string
  swatches: string[]
  colorNames: string[]
  minContrast: number
  notes?: string[]
  vars: Record<string, string>
}

export const wadaThemes: WadaTheme[] = [
  {
    "id": 203,
    "name": "Pale Lemon Yellow / Vinaceous Cinnamon / Lincoln Green",
    "mood": "warm · muted",
    "swatches": [
      "#ffefae",
      "#eea78c",
      "#555832"
    ],
    "colorNames": [
      "Pale Lemon Yellow",
      "Vinaceous Cinnamon",
      "Lincoln Green"
    ],
    "minContrast": 4.53,
    "vars": {
      "--background": "oklch(0.974 0.041 95.1)",
      "--foreground": "oklch(0.298 0.056 112.3)",
      "--card": "oklch(0.987 0.023 96.0)",
      "--card-foreground": "oklch(0.298 0.056 112.3)",
      "--popover": "oklch(0.987 0.023 96.0)",
      "--popover-foreground": "oklch(0.298 0.056 112.3)",
      "--primary": "oklch(0.448 0.057 112.4)",
      "--primary-foreground": "oklch(0.974 0.041 95.1)",
      "--secondary": "oklch(0.790 0.092 41.7)",
      "--secondary-foreground": "oklch(0.298 0.056 112.3)",
      "--muted": "oklch(0.928 0.043 96.9)",
      "--muted-foreground": "oklch(0.515 0.052 108.1)",
      "--accent": "oklch(0.899 0.053 41.4)",
      "--accent-foreground": "oklch(0.298 0.056 112.3)",
      "--border": "oklch(0.853 0.045 100.2)",
      "--input": "oklch(0.853 0.045 100.2)",
      "--ring": "oklch(0.448 0.057 112.4)",
      "--chart-1": "oklch(0.950 0.084 95.9)",
      "--chart-2": "oklch(0.790 0.092 41.7)",
      "--chart-3": "oklch(0.448 0.057 112.4)",
      "--chart-4": "oklch(0.950 0.084 95.9)",
      "--chart-5": "oklch(0.790 0.092 41.7)"
    }
  },
  {
    "id": 192,
    "name": "Cream Yellow / Vandyke Brown / Deep Violet / Plumbeous",
    "mood": "warm · muted",
    "swatches": [
      "#fdbf68",
      "#4b3317",
      "#70727c"
    ],
    "colorNames": [
      "Cream Yellow",
      "Vandyke Brown",
      "Deep Violet / Plumbeous"
    ],
    "minContrast": 4.53,
    "notes": [
      "accent-foreground tinted for contrast"
    ],
    "vars": {
      "--background": "oklch(0.964 0.025 73.2)",
      "--foreground": "oklch(0.343 0.054 68.4)",
      "--card": "oklch(0.980 0.014 67.7)",
      "--card-foreground": "oklch(0.343 0.054 68.4)",
      "--popover": "oklch(0.980 0.014 67.7)",
      "--popover-foreground": "oklch(0.343 0.054 68.4)",
      "--primary": "oklch(0.343 0.054 68.4)",
      "--primary-foreground": "oklch(0.964 0.025 73.2)",
      "--secondary": "oklch(0.844 0.126 73.9)",
      "--secondary-foreground": "oklch(0.343 0.054 68.4)",
      "--muted": "oklch(0.919 0.027 72.8)",
      "--muted-foreground": "oklch(0.512 0.045 67.8)",
      "--accent": "oklch(0.554 0.016 276.9)",
      "--accent-foreground": "oklch(0.985 0.012 75.4)",
      "--border": "oklch(0.852 0.031 73.9)",
      "--input": "oklch(0.852 0.031 73.9)",
      "--ring": "oklch(0.343 0.054 68.4)",
      "--chart-1": "oklch(0.844 0.126 73.9)",
      "--chart-2": "oklch(0.343 0.054 68.4)",
      "--chart-3": "oklch(0.554 0.016 276.9)",
      "--chart-4": "oklch(0.844 0.126 73.9)",
      "--chart-5": "oklch(0.343 0.054 68.4)"
    }
  },
  {
    "id": 202,
    "name": "Turquoise Green / Cobalt Green / Slate Color",
    "mood": "cool",
    "swatches": [
      "#b5decc",
      "#96d1aa",
      "#34454c"
    ],
    "colorNames": [
      "Turquoise Green",
      "Cobalt Green",
      "Slate Color"
    ],
    "minContrast": 4.52,
    "vars": {
      "--background": "oklch(0.965 0.028 165.5)",
      "--foreground": "oklch(0.379 0.025 225.0)",
      "--card": "oklch(0.980 0.015 164.7)",
      "--card-foreground": "oklch(0.379 0.025 225.0)",
      "--popover": "oklch(0.980 0.015 164.7)",
      "--popover-foreground": "oklch(0.379 0.025 225.0)",
      "--primary": "oklch(0.379 0.025 225.0)",
      "--primary-foreground": "oklch(0.965 0.028 165.5)",
      "--secondary": "oklch(0.810 0.082 155.2)",
      "--secondary-foreground": "oklch(0.379 0.025 225.0)",
      "--muted": "oklch(0.924 0.026 169.3)",
      "--muted-foreground": "oklch(0.514 0.022 208.8)",
      "--accent": "oklch(0.866 0.050 166.7)",
      "--accent-foreground": "oklch(0.379 0.025 225.0)",
      "--border": "oklch(0.860 0.026 171.9)",
      "--input": "oklch(0.860 0.026 171.9)",
      "--ring": "oklch(0.379 0.025 225.0)",
      "--chart-1": "oklch(0.866 0.050 166.7)",
      "--chart-2": "oklch(0.810 0.082 155.2)",
      "--chart-3": "oklch(0.379 0.025 225.0)",
      "--chart-4": "oklch(0.866 0.050 166.7)",
      "--chart-5": "oklch(0.810 0.082 155.2)"
    }
  },
  {
    "id": 139,
    "name": "Salvia Blue / Deep Indigo / Neutral Gray",
    "mood": "cool",
    "swatches": [
      "#97acc8",
      "#051230",
      "#b6bfc1"
    ],
    "colorNames": [
      "Salvia Blue",
      "Deep Indigo",
      "Neutral Gray"
    ],
    "minContrast": 5.95,
    "vars": {
      "--background": "oklch(0.964 0.006 223.5)",
      "--foreground": "oklch(0.192 0.063 263.0)",
      "--card": "oklch(0.980 0.003 219.5)",
      "--card-foreground": "oklch(0.192 0.063 263.0)",
      "--popover": "oklch(0.980 0.003 219.5)",
      "--popover-foreground": "oklch(0.192 0.063 263.0)",
      "--primary": "oklch(0.192 0.063 263.0)",
      "--primary-foreground": "oklch(0.964 0.006 223.5)",
      "--secondary": "oklch(0.738 0.047 255.7)",
      "--secondary-foreground": "oklch(0.192 0.063 263.0)",
      "--muted": "oklch(0.910 0.009 242.8)",
      "--muted-foreground": "oklch(0.440 0.044 261.1)",
      "--accent": "oklch(0.881 0.047 255.4)",
      "--accent-foreground": "oklch(0.192 0.063 263.0)",
      "--border": "oklch(0.826 0.015 251.2)",
      "--input": "oklch(0.826 0.015 251.2)",
      "--ring": "oklch(0.192 0.063 263.0)",
      "--chart-1": "oklch(0.738 0.047 255.7)",
      "--chart-2": "oklch(0.192 0.063 263.0)",
      "--chart-3": "oklch(0.798 0.010 212.5)",
      "--chart-4": "oklch(0.738 0.047 255.7)",
      "--chart-5": "oklch(0.192 0.063 263.0)"
    }
  },
  {
    "id": 168,
    "name": "Lemon Yellow / Vandar Poel's Blue / Veronia Purple",
    "mood": "bold",
    "swatches": [
      "#f8ed43",
      "#064f6e",
      "#8c4c62"
    ],
    "colorNames": [
      "Lemon Yellow",
      "Vandar Poel's Blue",
      "Veronia Purple"
    ],
    "minContrast": 4.61,
    "vars": {
      "--background": "oklch(0.951 0.170 105.6)",
      "--foreground": "oklch(0.404 0.082 234.2)",
      "--card": "oklch(0.973 0.094 106.1)",
      "--card-foreground": "oklch(0.404 0.082 234.2)",
      "--popover": "oklch(0.973 0.094 106.1)",
      "--popover-foreground": "oklch(0.404 0.082 234.2)",
      "--primary": "oklch(0.500 0.090 358.9)",
      "--primary-foreground": "oklch(0.951 0.170 105.6)",
      "--secondary": "oklch(0.404 0.082 234.2)",
      "--secondary-foreground": "oklch(0.951 0.170 105.6)",
      "--muted": "oklch(0.913 0.154 107.1)",
      "--muted-foreground": "oklch(0.499 0.048 170.8)",
      "--accent": "oklch(0.927 0.178 105.6)",
      "--accent-foreground": "oklch(0.404 0.082 234.2)",
      "--border": "oklch(0.852 0.130 110.3)",
      "--input": "oklch(0.852 0.130 110.3)",
      "--ring": "oklch(0.500 0.090 358.9)",
      "--chart-1": "oklch(0.927 0.178 105.6)",
      "--chart-2": "oklch(0.404 0.082 234.2)",
      "--chart-3": "oklch(0.500 0.090 358.9)",
      "--chart-4": "oklch(0.927 0.178 105.6)",
      "--chart-5": "oklch(0.404 0.082 234.2)"
    }
  },
  {
    "id": 189,
    "name": "Lemon Yellow / Deep Slate Olive / Venice Green",
    "mood": "bold · dark",
    "swatches": [
      "#f8ed43",
      "#253122",
      "#62c6bf"
    ],
    "colorNames": [
      "Lemon Yellow",
      "Deep Slate Olive",
      "Venice Green"
    ],
    "minContrast": 5.29,
    "vars": {
      "--background": "oklch(0.297 0.031 139.4)",
      "--foreground": "oklch(0.970 0.107 105.4)",
      "--card": "oklch(0.337 0.034 133.6)",
      "--card-foreground": "oklch(0.970 0.107 105.4)",
      "--popover": "oklch(0.337 0.034 133.6)",
      "--popover-foreground": "oklch(0.970 0.107 105.4)",
      "--primary": "oklch(0.927 0.178 105.6)",
      "--primary-foreground": "oklch(0.297 0.031 139.4)",
      "--secondary": "oklch(0.765 0.095 189.3)",
      "--secondary-foreground": "oklch(0.297 0.031 139.4)",
      "--muted": "oklch(0.344 0.035 132.5)",
      "--muted-foreground": "oklch(0.755 0.081 109.0)",
      "--accent": "oklch(0.360 0.030 139.4)",
      "--accent-foreground": "oklch(0.970 0.107 105.4)",
      "--border": "oklch(0.418 0.043 125.3)",
      "--input": "oklch(0.418 0.043 125.3)",
      "--ring": "oklch(0.927 0.178 105.6)",
      "--chart-1": "oklch(0.927 0.178 105.6)",
      "--chart-2": "oklch(0.297 0.031 139.4)",
      "--chart-3": "oklch(0.765 0.095 189.3)",
      "--chart-4": "oklch(0.927 0.178 105.6)",
      "--chart-5": "oklch(0.297 0.031 139.4)"
    }
  },
  {
    "id": 69,
    "name": "Warm Gray / Black",
    "mood": "near-monochrome",
    "swatches": [
      "#a1a39a",
      "#111314"
    ],
    "colorNames": [
      "Warm Gray",
      "Black"
    ],
    "minContrast": 5.97,
    "vars": {
      "--background": "oklch(0.956 0.008 114.2)",
      "--foreground": "oklch(0.185 0.004 229.0)",
      "--card": "oklch(0.975 0.004 106.5)",
      "--card-foreground": "oklch(0.185 0.004 229.0)",
      "--popover": "oklch(0.975 0.004 106.5)",
      "--popover-foreground": "oklch(0.185 0.004 229.0)",
      "--primary": "oklch(0.185 0.004 229.0)",
      "--primary-foreground": "oklch(0.956 0.008 114.2)",
      "--secondary": "oklch(0.711 0.013 116.9)",
      "--secondary-foreground": "oklch(0.185 0.004 229.0)",
      "--muted": "oklch(0.901 0.007 115.7)",
      "--muted-foreground": "oklch(0.433 0.003 165.0)",
      "--accent": "oklch(0.881 0.014 115.9)",
      "--accent-foreground": "oklch(0.185 0.004 229.0)",
      "--border": "oklch(0.817 0.007 124.5)",
      "--input": "oklch(0.817 0.007 124.5)",
      "--ring": "oklch(0.185 0.004 229.0)",
      "--chart-1": "oklch(0.711 0.013 116.9)",
      "--chart-2": "oklch(0.185 0.004 229.0)",
      "--chart-3": "oklch(0.711 0.013 116.9)",
      "--chart-4": "oklch(0.185 0.004 229.0)",
      "--chart-5": "oklch(0.711 0.013 116.9)"
    }
  },
  {
    "id": 268,
    "name": "Light Brown Drab / Raw Sienna / Deep Slate Olive / Nile Blue",
    "mood": "four-color",
    "swatches": [
      "#b59392",
      "#bb7125",
      "#253122",
      "#bce4e5"
    ],
    "colorNames": [
      "Light Brown Drab",
      "Raw Sienna",
      "Deep Slate Olive",
      "Nile Blue"
    ],
    "minContrast": 4.55,
    "notes": [
      "primary-foreground tinted for contrast"
    ],
    "vars": {
      "--background": "oklch(0.960 0.023 196.8)",
      "--foreground": "oklch(0.297 0.031 139.4)",
      "--card": "oklch(0.979 0.013 196.9)",
      "--card-foreground": "oklch(0.297 0.031 139.4)",
      "--popover": "oklch(0.979 0.013 196.9)",
      "--popover-foreground": "oklch(0.297 0.031 139.4)",
      "--primary": "oklch(0.617 0.127 61.4)",
      "--primary-foreground": "oklch(0.215 0.031 139.1)",
      "--secondary": "oklch(0.694 0.041 20.2)",
      "--secondary-foreground": "oklch(0.297 0.031 139.4)",
      "--muted": "oklch(0.914 0.023 190.1)",
      "--muted-foreground": "oklch(0.498 0.025 153.6)",
      "--accent": "oklch(0.891 0.042 198.3)",
      "--accent-foreground": "oklch(0.297 0.031 139.4)",
      "--border": "oklch(0.841 0.022 182.4)",
      "--input": "oklch(0.841 0.022 182.4)",
      "--ring": "oklch(0.617 0.127 61.4)",
      "--chart-1": "oklch(0.694 0.041 20.2)",
      "--chart-2": "oklch(0.617 0.127 61.4)",
      "--chart-3": "oklch(0.297 0.031 139.4)",
      "--chart-4": "oklch(0.891 0.042 198.3)",
      "--chart-5": "oklch(0.694 0.041 20.2)"
    }
  }
]
