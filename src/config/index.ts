const createSiteConfig = () => {
  const links = {
    github: 'https://github.com/aridanpantoja/krcod',
  }

  return {
    name: 'KRCOD',
    title: 'KRCOD | Generate any QR Code',
    url: 'https://krcod.com',
    description: 'KRCOD is a tool for create and customize QR Codes.',
    ogImage: 'https://krcod.com/og.jpg',
    links,
  }
}

export const siteConfig = createSiteConfig()

export const COLORS = [
  'Slate',
  'Green',
  'Violet',
  'Red',
  'Orange',
  'Blue',
  'Pink',
]
