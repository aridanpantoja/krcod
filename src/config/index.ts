const createSiteConfig = () => {
  const links = {
    github: 'https://github.com/aridanpantoja/krcod',
  }

  return {
    name: 'KRCod',
    description: 'KRCOD is a tool for create and customize QR Codes.',
    ogImage: 'https://krcod.com/og.jpg',
    links,
  }
}

export const siteConfig = createSiteConfig()

export const COLORS = [
  {
    name: 'Red',
    value: 'red',
  },
  {
    name: 'Green',
    value: 'green',
  },
  {
    name: 'Violet',
    value: 'violet',
  },
  {
    name: 'Slate',
    value: 'slate',
  },
]
