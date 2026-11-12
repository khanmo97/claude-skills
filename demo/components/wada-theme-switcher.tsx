"use client"

import { useCallback, useEffect, useState } from "react"
import { wadaThemes, type WadaTheme } from "@/lib/wada-themes"

const STORAGE_KEY = "wada-theme"
const ALL_VARS = Array.from(new Set(wadaThemes.flatMap((t) => Object.keys(t.vars))))

// Fixed neutral styling so the switcher stays readable on every theme.
const ui = {
  bg: "#18181b",
  panel: "#1f1f23",
  row: "#27272a",
  border: "#3f3f46",
  text: "#fafafa",
  dim: "#a1a1aa",
  active: "#fafafa",
}

function applyTheme(theme: WadaTheme | null) {
  const root = document.documentElement
  ALL_VARS.forEach((v) => root.style.removeProperty(v))
  if (theme) Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v))
  root.dataset.wadaTheme = theme ? String(theme.id) : "default"
}

function readStored(): number | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? Number(raw) : null
  } catch {
    return null
  }
}

function writeStored(id: number | null) {
  try {
    if (id === null) localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, String(id))
  } catch {
    /* storage unavailable */
  }
}

function themeCss(theme: WadaTheme) {
  const body = Object.entries(theme.vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n")
  return `/* Sanzo Wada combination ${theme.id}: ${theme.name} */\n:root {\n${body}\n}\n`
}

export function WadaThemeSwitcher() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(-1) // -1 = site default
  const [copied, setCopied] = useState(false)

  // Reads browser-only state (URL, localStorage) after hydration, so the server
  // render and first client render match.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const show = process.env.NODE_ENV !== "production" || params.get("themes") === "1"
    setVisible(show)
    if (!show) return
    if (params.get("panel") === "open") setOpen(true)
    const stored = readStored()
    const i = wadaThemes.findIndex((t) => t.id === stored)
    if (i >= 0) {
      setIndex(i)
      applyTheme(wadaThemes[i])
    }
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  const select = useCallback((i: number) => {
    const theme = i >= 0 ? wadaThemes[i] : null
    setIndex(i)
    applyTheme(theme)
    writeStored(theme ? theme.id : null)
  }, [])

  // Cycle through [Default, ...themes].
  const step = useCallback(
    (dir: 1 | -1) => {
      const n = wadaThemes.length + 1
      const next = (((index + 1 + dir) % n) + n) % n
      select(next - 1)
    },
    [index, select]
  )

  useEffect(() => {
    if (!visible) return
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === "]") step(1)
      else if (e.key === "[") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [visible, step])

  if (!visible) return null
  const current = index >= 0 ? wadaThemes[index] : null

  const copyCss = async () => {
    if (!current) return
    try {
      await navigator.clipboard.writeText(themeCss(current))
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard blocked */
    }
  }

  const arrowBtn: React.CSSProperties = {
    background: ui.row,
    color: ui.text,
    border: `1px solid ${ui.border}`,
    borderRadius: 8,
    width: 30,
    height: 30,
    cursor: "pointer",
    fontSize: 14,
  }

  return (
    <div
      data-wada-switcher
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 2147483000,
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        color: ui.text,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 10,
      }}
    >
      {open && (
        <div
          data-wada-panel
          style={{
            width: 380,
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            background: ui.panel,
            border: `1px solid ${ui.border}`,
            borderRadius: 14,
            boxShadow: "0 20px 50px rgba(0,0,0,.35)",
            padding: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Sanzo Wada palettes</div>
              <div style={{ fontSize: 11, color: ui.dim }}>Press [ and ] to cycle</div>
            </div>
            <button aria-label="Previous theme" style={arrowBtn} onClick={() => step(-1)}>
              ‹
            </button>
            <button aria-label="Next theme" style={arrowBtn} onClick={() => step(1)}>
              ›
            </button>
          </div>

          <button
            onClick={() => select(-1)}
            style={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 10px",
              marginBottom: 6,
              borderRadius: 10,
              cursor: "pointer",
              color: ui.text,
              background: index === -1 ? ui.row : "transparent",
              border: `1px solid ${index === -1 ? ui.active : "transparent"}`,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 600, width: 44 }}>—</span>
            <span style={{ fontSize: 12, flex: 1 }}>Default (site theme)</span>
          </button>

          {wadaThemes.map((t, i) => (
            <button
              key={t.id}
              data-theme-id={t.id}
              onClick={() => select(i)}
              style={{
                width: "100%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 10px",
                marginBottom: 4,
                borderRadius: 10,
                cursor: "pointer",
                color: ui.text,
                background: i === index ? ui.row : "transparent",
                border: `1px solid ${i === index ? ui.active : "transparent"}`,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600, width: 44, fontVariantNumeric: "tabular-nums" }}>
                #{t.id}
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontSize: 12, lineHeight: 1.3 }}>{t.name}</span>
                <span style={{ display: "block", fontSize: 10.5, color: ui.dim }}>{t.mood}</span>
              </span>
              <span style={{ display: "flex", gap: 3 }}>
                {t.swatches.map((s) => (
                  <span
                    key={s}
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 999,
                      background: s,
                      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.25)",
                    }}
                  />
                ))}
              </span>
            </button>
          ))}

          <button
            onClick={copyCss}
            disabled={!current}
            style={{
              width: "100%",
              marginTop: 8,
              padding: "9px 10px",
              borderRadius: 10,
              border: `1px solid ${ui.border}`,
              background: current ? ui.text : ui.row,
              color: current ? ui.bg : ui.dim,
              fontSize: 12,
              fontWeight: 600,
              cursor: current ? "pointer" : "not-allowed",
            }}
          >
            {copied ? "Copied!" : current ? `Copy CSS for #${current.id}` : "Pick a theme to copy its CSS"}
          </button>
        </div>
      )}

      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <button aria-label="Previous theme" style={{ ...arrowBtn, background: ui.bg }} onClick={() => step(-1)}>
          ‹
        </button>
        <button
          data-wada-toggle
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: ui.bg,
            color: ui.text,
            border: `1px solid ${ui.border}`,
            borderRadius: 999,
            padding: "8px 14px",
            fontSize: 12.5,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(0,0,0,.3)",
          }}
        >
          <span style={{ display: "flex" }}>
            {(current ? current.swatches : ["#e5e5e5", "#737373", "#171717"]).map((s, k) => (
              <span
                key={k}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: s,
                  marginLeft: k ? -4 : 0,
                  boxShadow: `0 0 0 1.5px ${ui.bg}`,
                }}
              />
            ))}
          </span>
          {current ? `Wada #${current.id}` : "Wada themes"}
        </button>
        <button aria-label="Next theme" style={{ ...arrowBtn, background: ui.bg }} onClick={() => step(1)}>
          ›
        </button>
      </div>
    </div>
  )
}
