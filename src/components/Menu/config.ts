import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.puppyswap.netlify.app'
  },
  {
    label: 'Exchange',
    href: '/swap',
    icon: "ExchangeIcon"
  },
  {
    label: 'Liquidity',
    href: '/pool',
    icon: 'LiquidityIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.puppyswap.netlify.app/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://www.puppyswap.netlify.app/pools'
  },
  {
    label: 'Oceans',
    icon: 'WaveIcon',
    href: 'https://www.puppyswap.netlify.app/oceans',
  },
  {
    label: 'Lottery 🆕',
    icon: 'TicketIcon',
    href: 'https://www.puppyswap.netlify.app/lottery',
  },
  {
    label: 'Launchpad (IDOs)',
    icon: 'IfoIcon',
    href: 'https://www.puppyswap.netlify.app/ido',
  },
  {
    label: 'Audit By Certik in progress...',
    icon: 'AuditIcon',
    href: '/',
  },
  {
    label: 'Price Graph',
    icon: 'GraphIcon',
    href: 'https://www.puppyswap.netlify.app/graph',
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/puppyswap-finance',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/puppyswap',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/puppyswap',
      },
    ],
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.puppyswap.netlify.app/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PuppySwap',
  //       href: 'https://puppyswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.puppyswap.netlify.app',
      // },
      {
        label: "Github",
        href: "https://github.com/puppyswap/",
        icon: 'GithubIcon'
      },
      {
        label: "Docs",
        href: "https://puppyswap.gitbook.io/puppy-swap",
        icon: 'GitbookIcon'
      },
      {
        label: "Blog",
        href: "https://puppyswap.medium.com",
        icon: 'MediumIcon'
      },
    ],
  },
]

export default config
